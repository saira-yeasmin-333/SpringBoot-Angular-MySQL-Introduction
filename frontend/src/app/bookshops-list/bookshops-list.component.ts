import { Component } from '@angular/core';
import { BookshopService } from '../bookshop.service';
import { Router } from '@angular/router';
import { Bookshop } from '../bookshop';
import { faPlus ,  faTrash,faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookshops-list',
  templateUrl: './bookshops-list.component.html',
  styleUrls: ['./bookshops-list.component.css']
})
export class BookshopsListComponent {
  bookshops:Bookshop[];
  title="Bookshop List";
  faPlus=faPlus;
  faTrash=faTrash;
  faPenSquare=faPenSquare;
  constructor(private bookshopService:BookshopService,private router:Router,private toastrService: ToastrService){
  }
  ngOnInit(): void {
    this.getAllBookshop();
    
  }
    getAllBookshop() {
      console.log("getting shops")
      this.bookshopService.getAllbookshops().subscribe(data=>{
      this.bookshops=data;
      console.log(this.bookshops)
    })
  }

  bookshopDetails(id: number){
    this.router.navigate(['bookshop-details', id]);
  }

  updateBookshop(id: number){
    this.router.navigate(['update-bookshop', id]);
  }

  deleteBookshop(id: number){
    this.bookshopService.deleteBookshop(id).subscribe( data => {
      console.log(data);
      this.toastrService.success('Bookshop is deleted successfully')
      this.getAllBookshop();
    })
  }

  addShop(){
    this.router.navigate(['create-bookshop']);
  }
}
