import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CounterService } from './books/services/counter.service';
import { Counter2Service } from './books/services/counter2.service';
import { ExternalService } from './books/services/external.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    SharedModule,
    BrowserAnimationsModule, // always use routing module at the bottom side 
    AppRoutingModule
  ],
  exports: [
  ],
  providers: [
    // { provide: Counter2Service, useExisting: CounterService }, CounterService,
    {
      provide: CounterService, useFactory: 
      (exService : ExternalService) => (exService.status) ? new Counter2Service() : new CounterService(),
      deps:[ExternalService]
    },
    ExternalService,
    //useFactory returns a function and we can put a logic before instantiation  
    { provide: 'app-title', useValue: { title: 'app Title', description: 'app Description' } }
  ],
  

  bootstrap: [AppComponent]
})
export class AppModule { }
