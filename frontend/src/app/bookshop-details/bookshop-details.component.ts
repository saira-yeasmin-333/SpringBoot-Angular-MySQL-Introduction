import { BookshopService } from './../bookshop.service';
import { Component } from '@angular/core';
import { Bookshop } from '../bookshop';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bookshop-details',
  templateUrl: './bookshop-details.component.html',
  styleUrls: ['./bookshop-details.component.css']
})
export class BookshopDetailsComponent {
  id: number;
  bookshop:Bookshop;
  books:any;
  constructor(private bookshopService: BookshopService,
   private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookshop=new Bookshop();
    this.bookshopService.getBookshopById(this.id).subscribe(data => {
      this.bookshop = data;
    }, error => console.log(error));
    this.bookshopService.getAllBooksByShopId(this.id).subscribe(data => {
      this.books= data;
    }, error => console.log(error));
  }
}
