import { Injectable } from '@angular/core';
import { Bookshop } from './bookshop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookshopService {

  private baseUrl="http://localhost:8080/api/bookshops"
  constructor(private httpClient:HttpClient) { }
  getAllbookshops():Observable<Bookshop[]>{
    return this.httpClient.get<Bookshop[]>(`${this.baseUrl}`);
  }

  createBookshop(bookshop:Bookshop):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,bookshop);
  }

  getBookshopById(id:number):Observable<Bookshop>{
    return this.httpClient.get<Bookshop>(`${this.baseUrl}/id/${id}`);
  }

  updateBookshop(id:number,bookshop:Bookshop):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,bookshop)
  }

  deleteBookshop(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  getAllBooksByShopId(id:number):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`http://localhost:8080/api/books/bookshop/${id}`)
  }
}
