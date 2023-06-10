import { Component, OnInit, Input } from '@angular/core';
import { MovieDetail } from 'src/app/models/Movie';
import Connect from 'src/app/public/Connect';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input() item!: MovieDetail;
  url_image = Connect.URL_IMAGE;
  constructor() {}

  ngOnInit() {}
}
