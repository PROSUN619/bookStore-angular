import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthorComponent } from '../shared/components/author/author.component';
import { AuthorModel } from '../shared/models/author.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  public obj: AuthorModel = { id: '123', name: 'Prasun' };
  public address: string = 'India'
  public count: number = 0;
  public passData: string
  private time : any


  @ViewChild('btnChange') btnChange: ElementRef
  @ViewChild(AuthorComponent) authComp: AuthorComponent

  constructor() {
    //console.log('Home Component constructor');

  }
  
  ngOnDestroy(): void {
    clearInterval(this.time);
  }

  ngOnInit(): void {
    console.log('btnChange', this.btnChange);
    this.timer();
  }

  ngAfterViewInit(): void {
    console.log('btnChange', this.btnChange);
    this.btnChange.nativeElement.innerHTML = 'button name changed from ngAfterViewInit';
  }

  ngAfterViewChecked(): void {
    console.log('Author Component Value changed ' + this.authComp.count);
  }

  changeChildValue(): void {
    this.passData = 'data passing from home'
    this.obj.name = 'Subhayan';
  }

  counter(): void {
    this.count++;
    this.address += this.count;
  }

  timer(): void {
   this.time =  setInterval(() => {
      this.count++;
      console.log(this.count);
    },1000);
  }

}
