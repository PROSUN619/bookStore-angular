import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { PublicRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailComponent,
    BooksComponent,
    RecentBooksComponent,
    BookCardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PublicRoutingModule
    //providers:[BookService] //use here if book service is required module level
  ]
})
export class BooksModule { }
