import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  public userid : string  = '';
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.route);        
    this.route.parent?.params.subscribe((param) => {
      this.userid = param.userid;
    })
  }

}
