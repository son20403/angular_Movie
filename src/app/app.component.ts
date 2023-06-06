import { Component } from '@angular/core';
// Initialization for ES Users
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-movie';
  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
    { img: 'http://placehold.it/350x150/666666' },
    { img: 'http://placehold.it/350x150/666666' },
    { img: 'http://placehold.it/350x150/666666' },
    { img: 'http://placehold.it/350x150/666666' },
  ];
  slideBanner = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  slideList = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
