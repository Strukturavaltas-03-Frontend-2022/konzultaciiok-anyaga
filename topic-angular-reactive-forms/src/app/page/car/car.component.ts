import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  // ng g c page/car
  carList$: Observable<Car[]> = this.carService.getAll();

  columns = this.config.carTableColumns;

  constructor(
    private carService: CarService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

  onCarSelect(car: Car): void {
    console.log(car);
    // navigate to the car editor page
  }

}
