import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userList: User[] = [
    {
      id: 1,
      firstName: 'Joe',
      lastName: 'Firpo',
      email: 'joe@gmail.com',
      birthDate: new Date(1998, 9, 25),
    },
    {
      id: 2,
      firstName: 'Jack',
      lastName: 'Firpo',
      email: 'Jack@gmail.com',
      birthDate: new Date(2001, 9, 25),
    },
    {
      id: 3,
      firstName: 'Bill',
      lastName: 'Firpo',
      email: 'Bill@gmail.com',
      birthDate: new Date(1988, 9, 25),
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
