import { Component, OnInit } from '@angular/core';
import Connect from 'src/app/public/Connect';
import { Injectable } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetail } from 'src/app/models/movie-detail';
import { ListMovie } from 'src/app/models/list-movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService],
})
@Injectable()
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  url = Connect.URL;
  now_playing: MovieDetail[] = [];
  upcoming: any;
  top_rated: any;
  title1 = 'Now Playing';
  title2 = 'Up Coming';
  title3 = 'Top Rate';

  ngOnInit() {
    this.movieService.getAll('now_playing').subscribe(({ results }) => {
      this.now_playing = results;
      console.log(this.now_playing);
    });

    this.movieService.getAll('upcoming').subscribe((res: any) => {
      console.log(res);

      this.upcoming = res.results;
    });

    this.movieService.getAll('top_rated').subscribe((res: any) => {
      this.top_rated = res.results;
    });
  }
}
