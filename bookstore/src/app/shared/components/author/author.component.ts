import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../../models/author.model';
import { AuthorAddressComponent } from '../author-address/author-address.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  constructor() { 
    //console.log('Author Component constructor');
  }

  

  @ContentChild(AuthorAddressComponent) authAddress : AuthorAddressComponent

  
  @Input() 
  public data : string 
  
  @Input() 
  public dynamicdata : string
 
  @Input()
  public author : AuthorModel = {id : "001", name : "Robert"}

  ngOnInit(): void {
    console.log('Author Component ngOnInit');
  }

  ngAfterContentInit(): void {
    //throw new Error('Method not implemented.');
    console.log("ngAfterContentInit get called; address " + this.authAddress?.address)    
  }

  ngAfterContentChecked(): void {
    //throw new Error('Method not implemented.');
    console.log("ngAfterContentChecked get called address " + this.authAddress?.address)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', this.author);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('Author Component ngOnChanges');
    console.log(changes);
  }

}


