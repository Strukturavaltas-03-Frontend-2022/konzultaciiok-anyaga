import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from 'src/app/model/drug';
import { DrugService } from 'src/app/service/drug.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {

  drugList$: Observable<Drug[]> = this.drugService.getAll();

  filterPhrase: string = '';

  constructor(
    private drugService: DrugService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(drug: Drug): void {
    this.drugService.delete(drug).subscribe(
      drug => this.drugList$ = this.drugService.getAll(),
    );
  }

}
