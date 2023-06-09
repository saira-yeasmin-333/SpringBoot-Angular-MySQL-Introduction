import { AuthorService } from './../author.service';
import { Component } from '@angular/core';
import { Author } from '../author';
import { Router } from '@angular/router';
import { faPlus ,  faTrash,faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent {
  authors:Author[];
  title="Author List";
  faPlus=faPlus;
  faTrash=faTrash;
  faPenSquare=faPenSquare;
  constructor(private authorService:AuthorService,private router:Router,private toastrService: ToastrService){
  }
  ngOnInit(): void {
    this.getAllAuthors();
  }
  private getAllAuthors() {
    this.authorService.getAllAuthors().subscribe(data=>{
      this.authors=data;
    })
  }

  authorDetails(id: number){
    this.router.navigate(['author-details', id]);
  }

  updateAuthor(id: number){
    this.router.navigate(['update-author', id]);
  }

  deleteAuthor(id: number){
    this.authorService.deleteAuthor(id).subscribe( data => {
      console.log(data);
      this.toastrService.success('Author is deleted successfully')
      this.getAllAuthors();
    })
  }
  addAuthor(){
    this.router.navigate(['create-author']);
  }
}
