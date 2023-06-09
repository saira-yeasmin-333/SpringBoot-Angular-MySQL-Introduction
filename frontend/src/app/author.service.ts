import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './author';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private baseUrl="http://localhost:8080/author"
  constructor(private httpClient:HttpClient) { }
  getAllAuthors():Observable<Author[]>{
    return this.httpClient.get<Author[]>(`${this.baseUrl}/getAll`);
  }

  createAuthor(author:Author):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/add`,author);
  }

  getAuthorById(id:number):Observable<Author>{
    return this.httpClient.get<Author>(`${this.baseUrl}/getById/${id}`);
  }

  updateAuthor(id:number,author:Author):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,author)
  }

  deleteAuthor(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  getbooksByAuthorId(id:number):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`http://localhost:8080/api/books/author/${id}`);
  }
}
