import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  phrase: FormControl = new FormControl('');

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.phrase.valueChanges.subscribe(
      actualValue => this.config.searchPhrase$.next(actualValue)
    );
  }

}
