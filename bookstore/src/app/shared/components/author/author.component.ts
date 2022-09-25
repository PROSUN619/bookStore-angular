import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public data : any

  public setdata(v : any) {
    this.data = v;
  }
  
  //pass data from child to parent
  @Output() mydata =  new EventEmitter<string>();
  
  passDatafromChildToParent() : void{
    this.mydata.emit("this is author child data ");
  }
  
  // @Input()
  // data: any

  // @Input()
  // public get counter(): number {
  //   return this._counter;
  // }  

  // public set counter(v : number) {
  //   this._counter = ++v;
  // }
  
  // private _counter: number

  // @Input()
  // visible: boolean

}
