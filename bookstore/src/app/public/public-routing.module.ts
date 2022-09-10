import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'public', component: PublicComponent, children: [
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-detail/:id', component: BookDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }