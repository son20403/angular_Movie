import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
// Initialization for ES Users
import { Collapse, Dropdown, Ripple, initTE, Input } from 'tw-elements';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  listGenres: any;
  ngOnInit() {
    initTE({ Collapse, Dropdown, Ripple, Input });
    this.movieService.getGenres().subscribe((data: any) => {
      this.listGenres = data.genres;
    });
  }
}
