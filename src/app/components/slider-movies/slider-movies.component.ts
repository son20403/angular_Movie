import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-movies',
  templateUrl: './slider-movies.component.html',
  styleUrls: ['./slider-movies.component.css'],
})
export class SliderMoviesComponent implements OnInit {
  @Input('listMovie') listMovie: any;
  @Input('titleList') titleList: any;
  constructor() {}

  ngOnInit() {}
  slideList = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
}
