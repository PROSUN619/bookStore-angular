import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  data : any 

  @Input()
  counter: number

  @Input()
  visible : boolean

}
