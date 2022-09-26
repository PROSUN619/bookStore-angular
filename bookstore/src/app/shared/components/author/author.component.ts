import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @Input() 
  public data : string 
  
  @Input() 
  public dynamicdata : string
 

  ngOnInit(): void {

  }

}
