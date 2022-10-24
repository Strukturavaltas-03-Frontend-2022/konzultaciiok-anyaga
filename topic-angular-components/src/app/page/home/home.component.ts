import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() homeTitle = 'Title of HomeComponent';

  @Output() titleChange: EventEmitter<string> = new EventEmitter();

  constructor() {
    setTimeout( () => {
      this.titleChange.emit('String from Emitter');
    }, 10000);
  }

  ngOnInit(): void {
  }

}
