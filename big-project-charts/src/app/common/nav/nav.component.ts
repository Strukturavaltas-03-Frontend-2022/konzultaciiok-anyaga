import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  router: Router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe(
      ev => {
        if (ev instanceof NavigationEnd) {
          console.log("Delete phrase.");
        }
      }
    )
  }

}
