import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';

interface ITableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phrase: string = '';

  filterKey: string = '';

  customerList: Customer[] = [];

  columns: ITableColumn[] = [
    {
      key: 'id',
      title: 'ID',
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'email',
      title: 'Email',
    },
    {
      key: 'rating',
      title: 'Rating',
    },
    {
      key: 'address',
      title: 'Address',
    },
  ];

  searchColumns: ITableColumn[] = [];

  constructor() { }

  ngOnInit(): void {
    fetch('https://nettuts.hu/jms/joe/customers')
      .then(
        response => response.json(),
      ).then(
        list => this.customerList = list,
      );

    // this.searchColumns = this.columns.filter( c => !['rating', 'id'].includes(c.key) );
  }

}
