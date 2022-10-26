import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

class EditableProduct extends Product {
  editable?: boolean = false;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  editMode: boolean = false;

  editModes: boolean[] = [];

  productList: EditableProduct[] = [
    {
      id: 1,
      name: 'Iron',
      price: 20000,
    },
    {
      id: 2,
      name: 'Wasching Maschine',
      price: 150000,
    },
    {
      id: 3,
      name: 'Bread',
      price: 590,
    },
    {
      id: 4,
      name: 'Milk',
      price: 355,
    },
    {
      id: 5,
      name: 'Screwdriver',
      price: 3500,
    },
  ];

  constructor() {
    setInterval( () => {
      // this.productList.push( this.getProduct() );
    }, 3000);
  }

  ngOnInit(): void {
  }

  updateProduct(product: EditableProduct): void {
    const index = this.productList.findIndex( p => p.id === product.id );
    this.productList.splice(index, 1, product);
    product.editable = false;
  }

  switchEditMode(product: Product, mode: boolean = true): void {
    const editModes = new Array(this.productList.length);
    editModes.fill(false);

    const index = this.productList.findIndex( p => p.id === product.id );
    editModes[index] = mode;
    this.editModes = editModes;
  }

  removeProduct(product: EditableProduct): void {
    const index = this.productList.findIndex( p => p.id === product.id );
    this.productList.splice(index, 1);
  }

  getProduct(): Product {
    const names = ['Iron', 'Bread', 'Flour', 'Blossom', 'Cinnamon'];
    const manufacturers = ['Bosch', 'Félegyházi', 'Siemens'];
    const price = Math.round( Math.random() * 100000 );
    const id = this.productList[this.productList.length -1].id + 1;
    return {
      id,
      name: names[Math.floor(Math.random() * names.length)],
      price,
      manufacturer: manufacturers[Math.floor(Math.random() * manufacturers.length)],
    };
  }

}
