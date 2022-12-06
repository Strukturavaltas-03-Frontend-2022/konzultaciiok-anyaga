import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl: string = isDevMode() ? 'http://localhost:3000' : 'https://nettuts.hu/jms/gegro/';

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
  ]

  constructor() { }
}
