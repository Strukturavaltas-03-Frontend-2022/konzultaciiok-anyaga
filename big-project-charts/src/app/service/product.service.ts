import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Address } from '../model/address';
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
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map( list => list.map( p => {
        p.address = new Address();
        return p;
      })),
    );
  }
}
