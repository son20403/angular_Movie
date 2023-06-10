import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-list-keywords',
  templateUrl: './list-keywords.component.html',
  styleUrls: ['./list-keywords.component.css'],
})
export class ListKeywordsComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute
  ) {}
  pages: number = 1;
  listMovieKeyword: any;
  id: any;
  idSubscribe!: Subscription;
  ngOnInit() {
    initTE({ Ripple });
    this.idSubscribe = this.router.params.subscribe((params) => {
      this.id = params['id'];
      this.LoadlistMovieKeyword();
    });
  }
  LoadAPI(page: number) {
    return this.movieService.getListMovieByKeyword(this.id, page);
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
