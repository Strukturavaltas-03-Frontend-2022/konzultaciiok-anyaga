import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService<Car> {

  public override entityName: string = 'cars';

  constructor() {
    super();
  }
}
