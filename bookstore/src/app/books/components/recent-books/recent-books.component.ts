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
    //this.books = this.bookService.getAllBooks();
    const newbooks = this.bookService.getAllRecentBooks();
    //debugger;
    newbooks.forEach((v, i, a) => {
      let obj = new BookModel();
      obj.id = v.id
      obj.title = v.title
      obj.price = v.price
      obj.author = v.author
      obj.totalPages = v.totalPages

      this.books.push(obj);
    })

  }
}
