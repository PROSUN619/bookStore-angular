import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  //providers:[BookService] //use here if book service is required component level
})
export class AllBooksComponent implements OnInit {

  books: BookModel[] = [];

  constructor(private bookService: BookService, public _counterService: CounterService) {
    //const bookService = new BookService(); // we will not create the instance every time
  }

  ngOnInit(): void {
    //this.books = this.bookService.getAllBooks();
    const newbooks = this.bookService.getAllBooks();
    //debugger;
    newbooks.forEach((v, i, a) => {
      let obj = new BookModel();
      obj.id = v.id
      obj.title = v.title
      obj.price = v.price
      obj.author = v.author
      obj.totalPages = v.totalPages
      obj.isPublished = v.isPublished
      obj.publishedDate = v.publishedDate  
      this.books.push(obj);
    })
    //console.log(this.books)
  }

  public increment(): void {
    this._counterService.incCounter();
  }

  public decrement(): void {
    this._counterService.decCounter();
  }

}
