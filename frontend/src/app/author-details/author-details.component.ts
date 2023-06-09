import { AuthorService } from './../author.service';
import { Component } from '@angular/core';
import { Author } from '../author';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {
  id: number;
  author:Author;
  books:any;
  constructor(private authorService: AuthorService,
   private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.author=new Author();
    this.authorService.getAuthorById(this.id).subscribe(data => {
      this.author = data;
    }, error => console.log(error));
    this.authorService.getbooksByAuthorId(this.id).subscribe(data => {
      this.books= data;
    }, error => console.log(error));
  }
}
