import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Connect from '../public/Connect';
import { Observable } from 'rxjs';
import { Movie, MovieDetail } from '../models/Movie';

type MovieType = {
  results: Movie[];
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string = Connect.URL;
  constructor(private http: HttpClient) {}
  getAll(argument: string): Observable<MovieType> {
    return this.http.get<MovieType>(`${this.url}/movie/${argument}`);
  }
  getById(id: number | string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.url}/movie/${id}`);
  }
  getByDetailMovie(id: number | string, argument: string) {
    return this.http.get(`${this.url}/movie/${id}/${argument}`);
  }

  getGenres() {
    return this.http.get(`${this.url}/genre/movie/list`);
  }
  getListMovieByKeyword(id: number, pages: number) {
    return this.http.get(`${this.url}/keyword/${id}/movies?page=${pages}`);
  }
  getListMovieGenres(with_genres: any) {
    return this.http.get(
      `${this.url}/discover/movie?with_genres=${with_genres}`
    );
  }
  getListMovieBySearch(query: string) {
    return this.http.get(`${this.url}/search/movie?query=${query}`);
  }

  // https://api.themoviedb.org/3/genre/movie/list?api_key=a9d1a1bf1174dcf6b126f48e7bbdb371
  // https://api.themoviedb.org/3/keyword/4344/movies
  // https://api.themoviedb.org/3/search/movie?api_key=e9e9d8da18ae29fc430845952232787c&page=2&query=super
}
