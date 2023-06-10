import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Ripple, initTE } from 'tw-elements';
@Component({
  selector: 'app-list-searchs',
  templateUrl: './list-searchs.component.html',
  styleUrls: ['./list-searchs.component.css'],
})
export class ListSearchsComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute
  ) {}
  pages: number = 1;
  listMovieKeyword: any;
  query: any;
  idSubscribe!: Subscription;
  ngOnInit() {
    initTE({ Ripple });
    this.idSubscribe = this.router.params.subscribe((params) => {
      this.query = params['query'];
      this.LoadlistMovieKeyword();
    });
  }
  LoadAPI(page: number) {
    return this.movieService.getListMovieBySearch(this.query + `&page=${page}`);
  }
  LoadMore() {
    this.pages++;
    this.LoadAPI(this.pages).subscribe((data: any) => {
      this.listMovieKeyword.push(...data.results);
    });
  }
  LoadlistMovieKeyword() {
    this.LoadAPI(this.pages).subscribe((data: any) => {
      console.log(data);
      this.listMovieKeyword = data.results;
    });
  }
  ngOnDestroy(): void {
    this.idSubscribe.unsubscribe();
  }
}
