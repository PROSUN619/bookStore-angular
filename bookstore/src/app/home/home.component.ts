import { AfterViewInit, Component, ElementRef, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CounterService } from '../books/services/counter.service';
import { ExternalService } from '../books/services/external.service';
import { AuthorComponent } from '../shared/components/author/author.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  //@ViewChild(AuthorComponent) //pass the component name
  @ViewChild('author') //pass the template reference name
  private authChild : AuthorComponent

  @ViewChild('decbutton')
  private decbutton : MatButton

  @ViewChild('home')
  private home : ElementRef

  constructor(public _counterService : CounterService, @Inject('app-title') public title : any,
              public  _externalService: ExternalService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.authChild.setdata(100);  
      this.decbutton.color = 'warn';    
      this.home.nativeElement.innerHTML = 'Home Works Successfully'; 
    }, 0);
  }


  public increment() : void{
    this._counterService.incCounter();     
  }

  public decrement() : void{
    this._counterService.decCounter(); 
  }

  public childData($event : any) : void {
    console.log($event);
  }

}
