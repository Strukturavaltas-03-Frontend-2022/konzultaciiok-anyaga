import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'https://nettuts.hu/jms/joe/product/';

  http: HttpClient = inject(HttpClient)

  list: Product[] = [
    {
      id: 1,
      name: 'Iron',
      price: 20000,
      catID: 1,
    },
    {
      id: 2,
      name: 'Bread',
      price: 500,
      catID: 2,
    },
  ]

  constructor() { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
