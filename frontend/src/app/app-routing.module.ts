import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookshopsListComponent } from './bookshops-list/bookshops-list.component';
import { UpdateBookshopComponent } from './update-bookshop/update-bookshop.component';
import { CreateBookshopComponent } from './create-bookshop/create-bookshop.component';
import { BookshopDetailsComponent } from './bookshop-details/bookshop-details.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';

const routes: Routes = [
  {path:'books',component:BookListComponent},
  {path:'update-book/:id',component:UpdateBookComponent},
  {path:'create-book',component:CreateBookComponent},
  {path:'book-details/:id',component:BookDetailsComponent},
  {path:'bookshops',component:BookshopsListComponent},
  {path:'update-bookshop/:id',component:UpdateBookshopComponent},
  {path:'create-bookshop',component:CreateBookshopComponent},
  {path:'bookshop-details/:id',component:BookshopDetailsComponent},
  {path:'authors',component:AuthorsListComponent},
  {path:'update-author/:id',component:UpdateAuthorComponent},
  {path:'create-author',component:CreateAuthorComponent},
  {path:'author-details/:id',component:AuthorDetailsComponent},
  {path:'',redirectTo:'books',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
