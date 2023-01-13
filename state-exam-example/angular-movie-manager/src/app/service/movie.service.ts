import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl: string = 'https://nettuts.hu/jms/joe/';

  entityName: string = 'movies';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}${this.entityName}`, movie);
  }

  update(movie: Movie): Observable<Movie> {
    return this.http.patch<Movie>(`${this.apiUrl}${this.entityName}/${movie.id}`, movie);
  }

  remove(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.apiUrl}${this.entityName}/${id}`);
  }
  
}
