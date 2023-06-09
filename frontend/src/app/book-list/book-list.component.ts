import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { faPlus ,  faTrash,faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books:Book[];
  title="Book List";
  faPlus=faPlus;
  faTrash=faTrash;
  faPenSquare=faPenSquare;
  constructor(private bookService:BookService,private router:Router,private toastrService: ToastrService){
  }
  ngOnInit(): void {
    this.getAllBooks();
  }
  private getAllBooks() {
    this.bookService.getAllbooks().subscribe(data=>{
      this.books=data;
    })
  }

  bookDetails(id: number){
    this.router.navigate(['book-details', id]);
  }

  updateBook(id: number){
    this.router.navigate(['update-book', id]);
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe( data => {
      console.log(data);
      this.toastrService.success('Book is deleted successfully')
      this.getAllBooks();
    },error=>{
      this.toastrService.info("You have to delete bookshop first")
    })
  }

  addBook(){
    this.router.navigate(['create-book']);
  }
}
