import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './model/movie';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-movie-manager';

  movieList: Observable<Movie[]> = this.movieService.getAll();

  constructor(
    private movieService: MovieService,
  ) {}
}
