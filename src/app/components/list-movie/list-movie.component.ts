import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
})
export class ListMovieComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  pages: number = 1;
  listMovie: any;
  ngOnInit() {
    initTE({ Ripple });
    this.LoadListMovie();
  }
  LoadAPI(page: number) {
    return this.movieService.getAll(`now_playing?page=${page}`);
  }
  LoadMore() {
    this.pages++;
    this.LoadAPI(this.pages).subscribe((data: any) => {
      this.listMovie.push(...data.results);
    });
  }
  LoadListMovie() {
    this.LoadAPI(this.pages).subscribe((data: any) => {
      this.listMovie = data.results;
    });
  }
}
