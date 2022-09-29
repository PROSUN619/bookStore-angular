import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit {

  books: BookModel[] = [];

  constructor(private bookService: BookService, public _counterService: CounterService) {
    //const bookService = new BookService(); // we will not create the instance every time
  }

  ngOnInit(): void {
    this.books = this.bookService.getAllRecentBooks();
  }
}
