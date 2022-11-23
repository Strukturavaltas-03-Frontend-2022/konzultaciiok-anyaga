import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  carService: CarService = inject(CarService);

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  car$: Observable<Car | null> = this.carService.selected$;

  constructor() { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.carService.get(params['id'])
    );
  }

}
