import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllBooksComponent,
    BookDetailComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
