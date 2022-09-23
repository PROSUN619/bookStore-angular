import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  //providers:[BookService] //use here if book service is required component level
})
export class AllBooksComponent implements OnInit {

  books : BookModel[] = []; 

  constructor(private bookService : BookService) { 
    //const bookService = new BookService(); // we will not create the instance every time
  }

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
    console.log(this.books)
  }

}
