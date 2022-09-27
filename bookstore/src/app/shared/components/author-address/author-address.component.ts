import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-address',
  templateUrl: './author-address.component.html',
  styleUrls: ['./author-address.component.scss']
})
export class AuthorAddressComponent implements OnInit {

  @Input()
  address : string  = ""
  

  constructor() { }

  ngOnInit(): void {
  }

}
