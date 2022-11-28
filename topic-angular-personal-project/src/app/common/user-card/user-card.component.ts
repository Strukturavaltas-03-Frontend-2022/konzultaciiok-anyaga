import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User = new User();

  @Input() classes: string = '';

  @Output() onSelect = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  raiseEdit(): void {
    this.onSelect.emit(this.user);
  }

}
