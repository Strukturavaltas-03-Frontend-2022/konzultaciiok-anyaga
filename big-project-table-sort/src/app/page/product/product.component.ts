import { Component, inject, OnInit } from '@angular/core';
import { combineLatest, map, tap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  service: ProductService = inject(ProductService)

  catService: CategoryService = inject(CategoryService)

  config: ConfigService = inject(ConfigService)

  cols = this.config.productColumns

  sortKey: string = ''

  sortDirection: number = 1

  list = combineLatest({
    cat: this.catService.getAll(),
    prod: this.service.getAll(),
  }).pipe(
    map( result => result.prod.map( product => {
      product.category = result.cat.find( c => c.id === product.catID )
      return product
    }) )
  )

  ngOnInit(): void {
    
  }

  startSort(key: string): void {
    if (key === this.sortKey) {
      this.sortDirection *= -1
    } else {
      this.sortDirection = 1
    }

    this.sortKey = key
  }

  onUpdate(product: Product): void {
    delete product.category
    // this.service.update(product)
  }

}
