import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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

  service: ProductService = inject(ProductService);

  catService: CategoryService = inject(CategoryService);

  config: ConfigService = inject(ConfigService);

  private modalService: BsModalService = inject(BsModalService);

  cols = this.config.productColumns;

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
  );

  lastDragKey = '';

  modalRef!: BsModalRef;

  lastSelectedProduct: Product = new Product();

  isLoading: boolean = false;

  ngOnInit(): void {}

  startSort(key: string): void {
    if (key === this.sortKey) {
      this.sortDirection *= -1
    } else {
      this.sortDirection = 1
    }

    this.sortKey = key
  }

  onHeaderDragStart(ev: DragEvent): void {
    this.lastDragKey = (ev.target as HTMLTableCellElement).id;
  }

  onHeaderDrop(ev: DragEvent): void {
    ev.preventDefault();
    const targetID: string = (ev.target as HTMLTableCellElement).id;
    const fromIndex = this.cols.findIndex( col => col.key === this.lastDragKey );
    const toIndex = this.cols.findIndex( col => col.key === targetID );
    this.swapCols(fromIndex, toIndex);
  }

  swapCols(from: number = 2, to: number = 0): void {
    const temp = {...this.cols[from]};
    this.cols.splice(from , 1);
    this.cols.splice(to, 0, temp);
  }

  onDelete(template: TemplateRef<any>, product: Product): void {
    this.modalRef = this.modalService.show(template);
    this.lastSelectedProduct = product;
  }

  async startDelete(): Promise<any> {
    this.isLoading = true;
    await new Promise( r => setTimeout(r, 3000) );
    this.isLoading = false;
    this.modalRef.hide();
    console.log("Run delete method!");
    // this.productService.delete(this.lastSelectedProduct).subscribe(
    //   data => {
    //     this.isLoading = false;
    //   }
    // )
  }

  onUpdate(product: Product): void {
    delete product.category
    // this.service.update(product)
  }

}
