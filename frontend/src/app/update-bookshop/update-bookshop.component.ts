import { BookshopService } from './../bookshop.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookshop } from '../bookshop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-bookshop',
  templateUrl: './update-bookshop.component.html',
  styleUrls: ['./update-bookshop.component.css']
})
export class UpdateBookshopComponent {
  id: number;
  bookshop: Bookshop = new Bookshop();
  shopForm!: FormGroup;
  constructor(private bookshopService: BookshopService,
   private route:ActivatedRoute,private router:Router,private formBuilder: FormBuilder,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookshopService.getBookshopById(this.id).subscribe(data => {
      this.bookshop = data;
    }, error => console.log(error));
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
  onSubmit(){
    if (this.shopForm.invalid) {
      console.log('invalid entered')
      this.toastrService.error('you have to fill the required fields')
      return;
    }
    this.bookshopService.updateBookshop(this.id, this.bookshop).subscribe( data =>{
      this.toastrService.success('Shop is updated successfully')
      this.goToBookshopList();
    }
    , error => console.log(error));
  }

  goToBookshopList(){
    this.router.navigate(['/bookshops']);
  }
}
