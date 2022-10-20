import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The best T360 team ever';

  currentTime: string = '';

  disabled: boolean = false;

  user: {id: number, name?: string, email?: string} = {
    id: 1,
    name: "Jack London",
    email: "writer@gmail.com",
  };

  constructor() {
    setInterval( () => {
      const d: Date = new Date();
      this.currentTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      // this.disabled = !this.disabled;
    }, 1000);
  }

  clickHandler() {
    alert('You clicked!');
  }
}
