import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

export interface ITableColumn {
  title: string;
  key: string;
}

export class FormField {
  label: string = '';
  key: string = '';
  type?: string = 'text';
  options?: {text: string, value: any}[];
  required?: boolean = true;
  validators?: ValidatorFn[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject('');

  userTableColumns: ITableColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Cat.', key: 'category' },
  ];

  carTableColumns: ITableColumn[] = [
    { key: 'id', title: 'Id' },
    { key: 'model', title: 'Model' },
    { key: 'make', title: 'Make' },
    { key: 'year', title: 'Year' },
    { key: 'price', title: 'Price' },
    { key: 'stock', title: 'Stock' },
    { key: 'active', title: 'Active' },
  ];

  userEditorFormFields: FormField[] = [
    {
      label: 'Name',
      key: 'name',
      validators: [
        Validators.pattern(/^[A-Ű][A-Űa-Ű .]{4,24}$/),
        Validators.required,
      ],
    },
    {
      label: 'Email',
      key: 'email',
      validators: [
        Validators.email,
        Validators.required,
      ],
    },
    {
      label: 'Category',
      key: 'category',
      type: 'select',
      options: [
        {text: 'Admin', value: 'Admin'},
        {text: 'Editor', value: 'Editor'},
        {text: 'User', value: 'User'},
        {text: 'Guest', value: 'Guest'},
      ],
      validators: [
        Validators.required,
      ]
    },
    {
      label: 'BIO',
      key: 'bio',
      type: 'textarea',
      validators: [
        Validators.required,
      ],
    },
  ];

  constructor() { }
}
