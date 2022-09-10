import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor() { }

  bookId : number = 1;
  
  ngOnInit(): void {
  }

}
