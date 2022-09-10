import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public id: number = 0;
  public authorid: number = 0;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route);
    // debugger;
    this.route.params.subscribe((param) => {
        this.id = param.id;
        this.authorid = param.authorid;
    })
  }

}
