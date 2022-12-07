import { CurrencyPipe } from '@angular/common';
import { Injectable, isDevMode, PipeTransform } from '@angular/core';
import { get } from 'lodash';

export interface ITableColumns {
  key: string;
  title: string;
  hidden?: boolean;
  pipes?: Array<PipeTransform | Function>;
  pipeArgs?: any[][];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl: string = isDevMode() ? 'http://localhost:3000' : 'https://nettuts.hu/jms/gegro/';

  productColumns: ITableColumns[] = [
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
      key: 'address',
      title: 'Address',
      pipes: [ConfigService.getSubProperty, new CurrencyPipe('en-US')],
      pipeArgs: [['street.number'], []],
    },
  ]

  constructor() { }

  // row.customer.name => (row, 'customer.name')
  static getSubProperty(obj: any, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(', ');
  }

}
