import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { MovieComponent } from './page/movie/movie.component';
import { HomeComponent } from './page/home/home.component';
import { MovieEditorComponent } from './page/movie-editor/movie-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieComponent,
    HomeComponent,
    MovieEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
