import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  productColumns = [
    {
      key: 'id',
      title: 'ID',
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'price',
      title: 'Price',
    },
    {
      key: 'category',
      title: 'Cat.',
    },
  ]

  constructor() { }
}
