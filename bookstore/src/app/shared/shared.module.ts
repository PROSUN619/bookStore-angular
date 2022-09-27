import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorAddressComponent } from './components/author-address/author-address.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorComponent,
    AuthorAddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    AuthorComponent,
    AuthorAddressComponent
  ]
})
export class SharedModule { }
