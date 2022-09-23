import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  // {
  //   path: 'books', component: BooksComponent, children: [
  //     { path: '', redirectTo: 'all-books', pathMatch: 'full' },
  //     { path: 'all-books', component: AllBooksComponent },
  //     { path: 'book-detail/:id/author/:authorid', component: BookDetailComponent }
  //   ]
  // }
  { path: 'all-books', component: AllBooksComponent },
  { path: 'book-detail/:id/author/:authorid', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
