import {  BookshopService } from './../bookshop.service';
import { Component, OnInit } from '@angular/core';
import { Bookshop } from '../bookshop';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-bookshop',
  templateUrl: './create-bookshop.component.html',
  styleUrls: ['./create-bookshop.component.css']
})
export class CreateBookshopComponent {
  bookshop:Bookshop=new Bookshop()
  shopForm!: FormGroup;
  constructor(private bookService:BookshopService,private router:Router,
    private formBuilder: FormBuilder,private toastrService: ToastrService){}
  ngOnInit(): void {
    this.createShopForm()
  }

  createShopForm(){
    this.shopForm = this.formBuilder.group({
      email:["", Validators.required],
      location: ["", Validators.required],
      contactNo: ["", Validators.required],
      shopName:["", Validators.required]
    });
  }
  saveBookshop(){
    if (this.shopForm.invalid) {
      console.log('invalid entered')
      this.toastrService.error('you have to fill the required fields')
      return;
    }else{
      this.bookService.createBookshop(this.shopForm.value).subscribe(data=>{
        console.log(data);
        this.toastrService.success('Shop is added successfully')
        this.goToBookshopList();
      },error=>{console.log(error)
      this.toastrService.error('Something went wrong')}
      );
    }
    
  }
  goToBookshopList(){
    this.router.navigate(['/bookshops']);
  }
  onSubmit(){
    console.log(this.bookshop)
    this.saveBookshop();
  }
}
