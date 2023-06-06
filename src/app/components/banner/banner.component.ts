import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import Connect from 'src/app/public/Connect';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  url = Connect.URL;
  url_image = Connect.URL_IMAGE;
  listMovie: any;
  bannerMovie: any;

  ngOnInit() {
    this.movieService.getAll('now_playing').subscribe((res: any) => {
      this.listMovie = res.results;
      this.bannerMovie = this.listMovie.slice(0, 5);
    });
  }
  slideBanner = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
}
