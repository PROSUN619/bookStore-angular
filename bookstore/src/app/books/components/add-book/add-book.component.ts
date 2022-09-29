import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit/*, AfterViewChecked */ {

  // @ViewChild('myform') myform : ElementRef

  constructor(private _bookService: BookService) { }

  // ngAfterViewChecked(): void {
  //   console.log(this.myform)
  // }

  @ViewChild('myform') myform : NgForm

  public bookModel : BookModel;

  prices: any[] = [
    {value: 200, viewValue: '200'},
    {value: 300, viewValue: '300'},
    {value: 500, viewValue: '500'},
  ];



  ngOnInit(): void {
    this.bookModel = {
      id : 1,
      title : 'Dummy Book',
      author : 'Sam Karan',
      totalPages: 500,
      price: { value: 200, currency: 'INR' }, 
      isPublished : true,
      publishedDate : new Date()
    };
  }

  savedata(): void {
    
    if (this.myform.valid)
      this._bookService.addNewBook(this.bookModel);
    else
      alert('This form is not valid');

    //console.log(values);
    //debugger
    //let book = new BookModel();

    // const book: BookModel = {
    //   id: 1,
    //   title: values.title,
    //   author: values.author,
    //   totalPages: values.pages,
    //   price: { value: values.price, currency: 'INR' },
    //   isPublished: values.isPublished,
    //   publishedDate: values.publishDate
    // }

    // book.title = values.title;
    // book.author = values.author;
    // book.totalPages = values.pages;
    // book.price = { value: values.price, currency: 'INR' }
    // book.isPublished = values.isPublished
    // book.publishedDate = values.publishDate
    //book.price.value = values.price;
    //book.price.currency = 'INR';    
  }

}
