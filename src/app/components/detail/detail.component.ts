import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie, MovieDetail } from 'src/app/models/Movie';
import Connect from 'src/app/public/Connect';
import { MovieService } from 'src/app/services/movie.service';
import { Tab, initTE } from 'tw-elements';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute
  ) {}

  url_image: string = Connect.URL_IMAGE;
  detailMovie!: MovieDetail;
  photosMovie: any;
  castsMovie: any;
  sliceCasts: any;
  keywordsMovie: any;
  commentsMovies: any;
  countRating: number = 0;
  // id!: number | string;
  idSubscribe!: Subscription;

  ngOnInit() {
    initTE({ Tab });
    this.idSubscribe = this.router.params.subscribe((params) => {
      const id = params['id'];
      this.movieService.getById(id).subscribe((res: MovieDetail) => {
        this.detailMovie = res;
        this.countRating = this.rate(this.detailMovie.vote_average);
      });
      this.movieService.getByDetailMovie(id, 'images').subscribe((res: any) => {
        this.photosMovie = res.backdrops;
        console.log(this.photosMovie);
      });
      this.movieService.getByDetailMovie(id, 'casts').subscribe((res: any) => {
        this.castsMovie = res.cast;
        console.log(this.castsMovie);
      });
      this.movieService
        .getByDetailMovie(id, 'keywords')
        .subscribe((res: any) => {
          this.keywordsMovie = res.keywords;
          console.log(this.keywordsMovie);
        });
      this.movieService
        .getByDetailMovie(id, 'reviews')
        .subscribe((res: any) => {
          this.commentsMovies = res.results;
        });
    });
  }
  ngOnDestroy(): void {
    this.idSubscribe.unsubscribe();
  }

  rate(point: any) {
    return 100 - Math.round((point / 10) * 100);
  }

  slidePhotos = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
}
