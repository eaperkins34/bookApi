import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayBooks } from './display-books/display-books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DatabaseService } from './services/database.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DisplayBooks,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
