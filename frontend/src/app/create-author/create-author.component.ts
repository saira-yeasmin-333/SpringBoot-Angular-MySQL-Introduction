import { AuthorService } from './../author.service';
import { Component } from '@angular/core';
import { Author } from '../author';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent {
  author:Author=new Author()
  authorForm!: FormGroup;
  constructor(private authorService:AuthorService,private router:Router,
    private formBuilder: FormBuilder,private toastrService: ToastrService){}
  ngOnInit(): void {
    
  }

  createForm(){
    this.authorForm = this.formBuilder.group({
      authorName:["", Validators.required]
    });
  }

  saveAuthor(){
    if (this.authorForm.invalid) {
      console.log('invalid entered')
      this.toastrService.error('you have to fill the required fields')
      return;
    }
    this.authorService.createAuthor(this.authorForm.value).subscribe(data=>{
      console.log(data);
      this.toastrService.success('author is added successfully')
      this.goToAuthorList();
    },error=>this.toastrService.error('Something went wrong')
    );
  }
  goToAuthorList(){
    this.router.navigate(['/authors']);
  }
  onSubmit(){
    console.log(this.author)
    this.saveAuthor();
  }
}
