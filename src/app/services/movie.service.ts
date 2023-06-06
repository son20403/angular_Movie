import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Connect from '../public/Connect';
import { Observable } from 'rxjs';
import { ListMovie } from '../models/list-movie';
import { MovieDetail } from '../models/movie-detail';

type MovieType = {
  results: MovieDetail[];
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = Connect.URL;
  constructor(private http: HttpClient) {}

  getAll(argument: any): Observable<MovieType> {
    return this.http.get<MovieType>(this.url + '/movie/' + argument);
  }
  getById(id: any) {
    return this.http.get(this.url + '/movie/' + id);
  }
  getByImages(id: any) {
    return this.http.get(this.url + '/movie/' + id + '/images');
  }
  getByCasts(id: any) {
    return this.http.get(this.url + '/movie/' + id + '/casts');
  }
  getByKeyWords(id: any) {
    return this.http.get(this.url + '/movie/' + id + '/keywords');
  }
  getGenres() {
    return this.http.get(this.url + '/genre/movie/list');
  }
  getListMovieGenres(with_genres: any) {
    return this.http.get(
      this.url + `/discover/movie?with_genres=${with_genres}`
    );
  }
  getListComment(id: any) {
    return this.http.get(this.url + '/movie/' + id + '/reviews');
  }
  // https://api.themoviedb.org/3/genre/movie/list?api_key=a9d1a1bf1174dcf6b126f48e7bbdb371
}
