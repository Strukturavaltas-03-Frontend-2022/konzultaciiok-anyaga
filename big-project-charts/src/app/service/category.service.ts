import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  http: HttpClient = inject(HttpClient)

  list: Category[] = [
    {
      id: 1,
      name: 'Household',
      desc: '',
    },
    {
      id: 2,
      name: 'Grocery',
      desc: '',
    },
    {
      id: 3,
      name: 'Electronic',
      desc: '',
    },
  ]

  constructor() { }

  getAll(): Observable<Category[]> {
    return of(this.list)
  }
}
