import { AuthorService } from './../author.service';
import { Component } from '@angular/core';
import { Author } from '../author';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent {
  id: number;
  author: Author = new Author();
  authorForm!: FormGroup;
  constructor(private authorService: AuthorService,
   private route:ActivatedRoute,private router:Router,private formBuilder: FormBuilder,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authorService.getAuthorById(this.id).subscribe(data => {
      this.author = data;
    }, error => console.log(error));
    this.createForm()
  }

  createForm(){
    this.authorForm = this.formBuilder.group({
      authorName:["", Validators.required]
    });
  }

  onSubmit(){
    if (this.authorForm.invalid) {
      console.log('invalid entered')
      this.toastrService.error('you have to fill the required fields')
      return;
    }
    this.authorService.updateAuthor(this.id, this.author).subscribe( data =>{
      this.toastrService.success('Author is updated successfully')
      this.goToAuthorList();
    }
    , error => console.log(error));
  }

  goToAuthorList(){
    this.router.navigate(['/authors']);
  }
}

