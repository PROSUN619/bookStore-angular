import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  bookId : number = 1;
  authorId: number = 2;
  
  ngOnInit(): void {
    this.route.firstChild?.params.subscribe(param => {
      console.log(param);
    })
      
  }

}
