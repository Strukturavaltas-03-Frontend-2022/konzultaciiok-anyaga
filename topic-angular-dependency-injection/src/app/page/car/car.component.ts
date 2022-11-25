import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  carList$: Observable<Car[]> = this.carService.list$;

  columns = this.config.carTableColumns;

  constructor(
    private carService: CarService,
    private config: ConfigService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log( this.carService );
    this.carService.getAll();
  }

  onCarSelect(car: Car): void {
    this.router.navigate(['/', 'car', 'edit', car.id]);
  }

  onCarRemove(car: Car): void {
    this.carService.delete(car.id);
  }

}
