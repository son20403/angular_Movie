import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { ListGenresComponent } from './components/list-genres/list-genres.component';
import { ListKeywordsComponent } from './components/list-keywords/list-keywords.component';
import { ListSearchsComponent } from './components/list-searchs/list-searchs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'genre/:id', component: ListGenresComponent },
  { path: 'keyword/:id', component: ListKeywordsComponent },
  { path: 'search/:query', component: ListSearchsComponent },
  { path: 'listMovie', component: ListMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
