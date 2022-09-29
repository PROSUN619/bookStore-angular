import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit/*, AfterViewChecked */{

  // @ViewChild('myform') myform : ElementRef

  constructor(private _bookService : BookService) { }

  // ngAfterViewChecked(): void {
  //   console.log(this.myform)
  // }

  ngOnInit(): void {
  }

  savedata(values : any) : void {
    console.log(values);
    debugger
    let book = new BookModel();
    book.title = values.title;
    book.author = values.author;
    book.totalPages = values.pages;
    book.price =  {value: values.price, currency : 'INR'} 
    book.isPublished = values.isPublished
    book.publishedDate = values.publishDate

    //book.price.value = values.price;
    //book.price.currency = 'INR';

    this._bookService.addNewBook(book);
  }

}
