import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'My Angular Demo!';

  currentTime: {h: number, m: number, s: number} = {
    h: 22,
    m: 10,
    s: 22,
  };

  constructor() {
    setInterval( () => {
      const currentDate = new Date();
      const age = 44;
      this.title = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    }, 1000);
  }
}
