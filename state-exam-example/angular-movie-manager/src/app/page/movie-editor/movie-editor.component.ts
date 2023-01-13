import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.scss']
})
export class MovieEditorComponent {

  movie$ = this.acitvatedRoute.params.pipe(
    switchMap( params => this.movieService.get(params['id']) ),
  );

  constructor(
    private movieService: MovieService,
    private acitvatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  onUpdate(movie: Movie): void {
    this.movieService.update(movie).subscribe(
      () => this.router.navigate(['/movie']),
    );
  }

}
