import { Component, OnInit } from '@angular/core';
import Connect from 'src/app/public/Connect';
import { Injectable } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/Movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService],
})
@Injectable()
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  url: string = Connect.URL;
  now_playing: Movie[] = [];
  upcoming: Movie[] = [];
  top_rated: Movie[] = [];
  title1: string = 'Now Playing';
  title2: string = 'Up Coming';
  title3: string = 'Top Rate';

  ngOnInit() {
    this.movieService
      .getAll('now_playing')
      .subscribe(({ results }) => (this.now_playing = results));

    this.movieService
      .getAll('upcoming')
      .subscribe(({ results }) => (this.upcoming = results));

    this.movieService
      .getAll('top_rated')
      .subscribe(({ results }) => (this.top_rated = results));
  }
}
