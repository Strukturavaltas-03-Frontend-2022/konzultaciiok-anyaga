import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movieList: Observable<Movie[]> = this.movieService.getAll();

  constructor(
    private movieService: MovieService,
  ) {}

  onRemove(movie: Movie): void {
    this.movieService.remove(movie.id).subscribe(
      () => this.movieList = this.movieService.getAll(),
    );
  }
  
}
