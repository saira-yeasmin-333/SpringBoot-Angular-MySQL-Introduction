import { BookshopService } from './../bookshop.service';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { Bookshop } from '../bookshop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit{
  book:Book=new Book()
  bookshops:Bookshop[];
  selectedValue:any;
  addedLastBook:any;
  assignedShop:any;
  bookForm!: FormGroup;

  constructor(private bookService:BookService,private router:Router,
    private bookshopService:BookshopService,private formBuilder: FormBuilder,private toastrService: ToastrService){}
  ngOnInit(): void {
    this.bookshopService.getAllbookshops().subscribe(data=>{
      this.bookshops=data;
    })
    this.createForm();
    
  }

  createForm(){
    this.bookForm = this.formBuilder.group({
      title: ["", Validators.required],
      price: ["", Validators.required],
      yearOfPublish: ["", Validators.required],
      genre: ["", Validators.required],
      publisher: ["", Validators.required],
      shopName:["", Validators.required]
    });
  
  }

  changeShop(e:any){
    this.selectedValue=e.target.value;
    console.log(e.target.value);
  }
  saveBook(){
    if (this.bookForm.invalid) {
      console.log('invalid entered')
      this.toastrService.error('you have to fill the required fields')
      return;
    }
    else{
        console.log(this.bookForm.value,54)
        this.bookService.createBook(this.bookForm.value).subscribe(data=>{
          console.log(data);
          this.addedLastBook=data;
          if(this.selectedValue===undefined){
            this.toastrService.error("Assin a bookshop")
          }else{
            this.assignShop(Number.parseInt(this.selectedValue.split('.')[0]),this.addedLastBook.bookId)
            console.log("addedt,his.addedLastBook",this.addedLastBook)
            this.toastrService.success("Successfully  Added")
            this.goToBookList();
          }
          
        },error=>console.log(error)
        );
      }
    
  }
  goToBookList(){
    this.router.navigate(['/books']);
  }
  assignShop(shopId:number,bookId:number){
    this.bookService.assignShop(shopId,bookId).subscribe(data=>{
      this.assignedShop=data;
      console.log(data)
    });
  }
  onSubmit(){
    console.log(this.book)
    console.log(this.selectedValue);
    //console.log('eadded last book',this.addedLastBook)
    this.saveBook();
    // this.assignShop(this.selectedValue,this.addedLastBook.bookId);
  }

}
