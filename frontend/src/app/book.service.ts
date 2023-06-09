import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { Bookshop } from './bookshop';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="http://localhost:8080/api/books"
  constructor(private httpClient:HttpClient) { }
  getAllbooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}`);
  }

  createBook(book:Book):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,book);
  }

  getBookById(id:number):Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseUrl}/id/${id}`);
  }

  updateBook(id:number,book:Book):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,book)
  }

  deleteBook(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  assignShop(shopId:number,bookId:number):Observable<Object>{
    console.log('assign called')
    return this.httpClient.put(`http://localhost:8080/api/bookshops/${shopId}/book/${bookId}`,null);
  }
  getShop(id:number):Observable<Bookshop>{
    return this.httpClient.get<Bookshop>(`${this.baseUrl}/shop/${id}`);
  }
  getAuthorsByBookId(id:number):Observable<Author>{
    return this.httpClient.get<Author>(`http://localhost:8080/author/book/${id}`);
  }

  assignAuthor(authorId:number,bookId:number):Observable<Object>{
    console.log('assign called')
    return this.httpClient.put(`${this.baseUrl}/${bookId}/author/${authorId}`,null);
  }

  
}
