import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../../models/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit, OnChanges, DoCheck {

  constructor() { 
    //console.log('Author Component constructor');
  }

  ngDoCheck(): void {

    console.log('ngDoCheck', this.author);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('Author Component ngOnChanges');
    console.log(changes);
  }

  @Input() 
  public data : string 
  
  @Input() 
  public dynamicdata : string
 
  @Input()
  public author : AuthorModel = {id : "001", name : "Robert"}

  ngOnInit(): void {
    console.log('Author Component ngOnInit');
  }

}
