import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ImdbComponent } from './imdb/imdb.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import {AddMovieComponent } from './addmovie/addmovie.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ImdbComponent,
  AppComponent,
  HeaderComponent,
  MoviesComponent,
  AddMovieComponent,
  LoginComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
{path: 'header', component: HeaderComponent},
{path: 'imbd', component: ImdbComponent},
{path: 'movies', component: MoviesComponent},
{path: 'addMovie', component: AddMovieComponent},
{path: 'login', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
