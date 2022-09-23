import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { PublicRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailComponent,
    BooksComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PublicRoutingModule
    //providers:[BookService] //use here if book service is required module level
  ]
})
export class BooksModule { }
