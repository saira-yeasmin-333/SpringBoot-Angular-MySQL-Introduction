import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.services';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookshopsListComponent } from './bookshops-list/bookshops-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { UpdateBookshopComponent } from './update-bookshop/update-bookshop.component';
import { CreateBookshopComponent } from './create-bookshop/create-bookshop.component';
import { BookshopDetailsComponent } from './bookshop-details/bookshop-details.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    BookListComponent,
    CreateBookComponent,
    UpdateBookComponent,
    BookDetailsComponent,
    BookshopsListComponent,
    AuthorsListComponent,
    UpdateBookshopComponent,
    CreateBookshopComponent,
    BookshopDetailsComponent,
    UpdateAuthorComponent,
    CreateAuthorComponent,
    AuthorDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
