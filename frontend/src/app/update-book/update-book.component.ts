import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{
  id: number;
  book: Book = new Book();
  bookForm!: FormGroup;
  constructor(private bookService: BookService,
   private route:ActivatedRoute,private router:Router,private formBuilder: FormBuilder,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
    this.createForm()
    // this.initializeFormWithData(this.book)
  }

  createForm(){
    this.bookForm = this.formBuilder.group({
      title: ["", Validators.required],
      price: ["", Validators.required],
      yearOfPublish: ["", Validators.required],
      genre: ["", Validators.required],
      publisher: ["", Validators.required],
    });
  }

  initializeFormWithData(data: Book) {
    this.bookForm.patchValue(data);
  }

  onSubmit(){
    if (this.bookForm.invalid) {
      console.log('invalid entered')
      this.toastrService.error('you have to fill the required fields')
      return;
    }
    this.bookService.updateBook(this.id, this.book).subscribe( data =>{
      this.toastrService.success('Book is updated successfully')
      this.goToEmployeeList();
    }
    , error => this.toastrService.error('Something went wrong'));
  }

  goToEmployeeList(){
    this.router.navigate(['/books']);
  }
}
