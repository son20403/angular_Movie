import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrls: ['./list-genres.component.css'],
})
export class ListGenresComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute
  ) {}
  pages: number = 1;
  listMovieGenres: any;
  id: any;
  idSubscribe!: Subscription;
  ngOnInit() {
    initTE({ Ripple });
    this.idSubscribe = this.router.params.subscribe((params) => {
      this.id = params['id'];
      this.LoadlistMovieGenres();
    });
    console.log(this.id);
  }
  LoadAPI(page: number) {
    return this.movieService.getListMovieGenres(this.id + `&page=${page}`);
  }
  LoadMore() {
    this.pages++;
    this.LoadAPI(this.pages).subscribe((data: any) => {
      this.listMovieGenres.push(...data.results);
    });
  }
  LoadlistMovieGenres() {
    this.LoadAPI(this.pages).subscribe((data: any) => {
      console.log(data);
      this.listMovieGenres = data.results;
    });
  }
  ngOnDestroy(): void {
    this.idSubscribe.unsubscribe();
  }
}
