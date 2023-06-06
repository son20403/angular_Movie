import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  url = Connect.URL;
  url_image = Connect.URL_IMAGE;
  photosMovie: any;
  detailMovie: any;
  castsMovie: any;
  sliceCasts: any;
  keywordsMovie: any;
  commentsMovies: any;
  countRating: any;

  ngOnInit() {
    initTE({ Tab });
    let id = +this.router.snapshot.params['id'];
    this.movieService.getById(id).subscribe((res: any) => {
      this.detailMovie = res;
      this.countRating = this.rate(this.detailMovie.vote_average);
      console.log(this.countRating);
    });
    this.movieService.getByImages(id).subscribe((res: any) => {
      this.photosMovie = res.backdrops;
    });
    this.movieService.getByCasts(id).subscribe((res: any) => {
      this.castsMovie = res.cast;
    });
    this.movieService.getByKeyWords(id).subscribe((res: any) => {
      this.keywordsMovie = res.keywords;
    });
    this.movieService.getListComment(id).subscribe((res: any) => {
      this.commentsMovies = res.results;
      console.log(this.commentsMovies);
    });
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
