import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('allbooklist') // <-- this is alias name and it is optional  
  public set value(v : BookModel[]) {
    v.map( x => x.title = 'Title : ' + x.title)    
   // debugger
    this._bookList = v;
  }

  public get bookList() : BookModel[] {
    return this._bookList;
  }    
      
  _bookList : BookModel[];

}
