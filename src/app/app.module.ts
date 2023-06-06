import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { BannerComponent } from './components/banner/banner.component';
import { ListComponent } from './components/list/list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import { ExampleInterceptor } from './services/Interceptors';
import { LoaderService } from './services/loader.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './services/loading.interceptor';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { ListGenresComponent } from './components/list-genres/list-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardItemComponent,
    BannerComponent,
    ListComponent,
    DetailComponent,
    SpinnerComponent,
    ListMovieComponent,
    ListGenresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
