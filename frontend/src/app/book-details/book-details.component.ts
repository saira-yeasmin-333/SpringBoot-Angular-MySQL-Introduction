import { AuthorService } from './../author.service';
import { BookService } from './../book.service';
import { Component } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookshop } from '../bookshop';
import { Author } from '../author';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  id: number;
  book: any =null;
  bookshop:Bookshop;
  updatedBook:any;
  selectedValue:any;
  authors:Author[];
  assignedAuthors:any;
  constructor(private bookService: BookService,
  private route:ActivatedRoute,private router:Router,private authorService:AuthorService,private toastrService:ToastrService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
    this.bookService.getShop(this.id).subscribe(data=>{
      this.bookshop=data;
    })
    this.showAllAuthors();
  }

  showAuthors(){
    this.id = this.route.snapshot.params['id'];
    this.bookService.getAuthorsByBookId(this.id).subscribe(data=>{
      this.assignedAuthors=data;
      console.log('assugned author',data)
    })
  }

  showAllAuthors(){
    this.authorService.getAllAuthors().subscribe(data=>{
      this.authors=data;
    })
  }

  assignAuthor(authorId:number,bookId:number){
    this.bookService.assignAuthor(authorId,bookId).subscribe(data=>{
      this.book=data;
      var authorObject:any=null
      this.authors.map(a=>{
        console.log(a,authorId)
        if(a.authorId===authorId){
          console.log('here 1')
          authorObject=a
        }
      })
      console.log('theree')

      this.toastrService.success(`You assigned author ${authorObject?.authorName} to the book of id ${bookId}`)
      console.log(data)
    },e=>{
      this.toastrService.error("This author is already assingned to this book")
    });
  }

  changeAuthor(e:any){
    this.selectedValue=e.target.value;
    console.log(e.target.value);
  }

  onSubmit(){
    console.log(this.book)
    //console.log('eadded last book',this.addedLastBook)
    this.id = this.route.snapshot.params['id'];
    this.assignAuthor(Number.parseInt(this.selectedValue.split('.')[0]),this.id);
    // this.assignShop(this.selectedValue,this.addedLastBook.bookId);
  }
    
}
