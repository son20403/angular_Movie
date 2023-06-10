import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import Connect from 'src/app/public/Connect';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  url_image = Connect.URL_IMAGE;
  listMovie: Movie[] = [];

  ngOnInit() {
    this.movieService.getAll('top_rated').subscribe(({ results }) => {
      this.listMovie = results.slice(0, 5);
    });
  }
  slideBanner = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
}
