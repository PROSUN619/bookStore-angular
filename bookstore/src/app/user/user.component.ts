import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId = ""

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.route);        
    this.route.params.subscribe((param) => {
      this.userId = param.userid;
      console.log('userId', this.userId)
    })
  }
}
