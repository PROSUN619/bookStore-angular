import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../shared/models/author.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public obj: AuthorModel = { id: '123', name: 'Prasun' };
  public address: string = 'India'
  private count: number = 0;

  constructor() {
    //console.log('Home Component constructor');

  }

  ngOnInit(): void {
    //console.log('Home Component ngOnInit');
  }

  public passData: string

  changeChildValue(): void {
    this.passData = 'data passing from home'
    this.obj.name = 'Subhayan';
  }

  counter(): void {
    this.count++;
    this.address += this.count;
  }
}
