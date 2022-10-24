import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Angular Component Input/Output';

  constructor() {}

  updateTitle(title: string): void {
    this.appTitle = title;
  }
}
