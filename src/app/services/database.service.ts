import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book.model'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private _dbUrl = 'http://localhost:3000/book'
  constructor(private _http: HttpClient) { }    //this does the fetch for us Angular

  getBooks() : Observable<Book[]> {     //observable will fetch but not slow down based on quantity or speed, must correspond with the <model[]>
    return this._http.get<Book[]>(this._dbUrl)  //http request, could be 'http.post', 'http.put', 'http.get' etc...
  }  

  makeBook(book: Book) : Observable<Book[]>{
    return this._http.post<Book[]>(this._dbUrl, book, httpOptions)
  }
}




