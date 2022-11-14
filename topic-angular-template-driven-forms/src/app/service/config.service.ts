import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ITableColumn {
  title: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject('');

  userTableColumns: ITableColumn[] = [
    {title: 'ID', key: 'id'},
    {title: 'Name', key: 'name'},
    {title: 'Email', key: 'email'},
    {title: 'Cat.', key: 'category'},
  ];

  constructor() { }
}
