import { Component, OnInit } from '@angular/core';
import { CounterService } from '../books/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _counterService : CounterService) { }

  ngOnInit(): void {

  }

  public increment() : void{
    this._counterService.incCounter();     
  }

  public decrement() : void{
    this._counterService.decCounter(); 
  }

}
