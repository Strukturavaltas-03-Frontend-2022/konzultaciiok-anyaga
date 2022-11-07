import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drug } from '../model/drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  apiUrl: string = environment.apiUrl;

  entityName: string = 'drugs';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Drug> {
    return this.http.get<Drug>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(drug: Drug): Observable<Drug> {
    return this.http.post<Drug>(
      `${this.apiUrl}${this.entityName}`,
      drug
    );
  }

  update(drug: Drug): Observable<Drug> {
    return this.http.patch<Drug>(
      `${this.apiUrl}${this.entityName}/${drug.id}`,
      drug
    );
  }

  delete(drug: Drug): Observable<Drug> {
    return this.http.delete<Drug>(
      `${this.apiUrl}${this.entityName}/${drug.id}`
    );
  }

}

/**
 * Store-based solution.
 */

/*
export class DrugService {

  apiUrl: string = environment.apiUrl;

  entityName: string = 'drugs';

  list$: BehaviorSubject<Drug[]> = new BehaviorSubject<Drug[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<Drug[]>(`${this.apiUrl}${this.entityName}`).subscribe(
      list => this.list$.next(list),
    );
  }

  get(id: number): Observable<Drug> {
    return this.http.get<Drug>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(drug: Drug): void {
    this.http.post<Drug>(
      `${this.apiUrl}${this.entityName}`,
      drug
    ).subscribe(
      createdDrug => {
        const list = this.list$.getValue();
        list.push(createdDrug);
        this.list$.next(list);
      }
    )
  }

  update(drug: Drug): Observable<Drug> {
    return this.http.patch<Drug>(
      `${this.apiUrl}${this.entityName}/${drug.id}`,
      drug
    );
  }

  delete(drug: Drug): void {
    this.http.delete<Drug>(
      `${this.apiUrl}${this.entityName}/${drug.id}`
    ).subscribe(
      response => {
        const list = this.list$.getValue();
        const index = list.findIndex( d => d.id === drug.id );
        list.splice(index, 1);
        this.list$.next(list);
      }
    );
  }

}
*/
