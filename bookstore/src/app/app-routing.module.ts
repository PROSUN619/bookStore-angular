import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  {path: 'auth', component : AuthComponent, 
    loadChildren : () => import('./auth/auth.module').then(x => x.AuthModule)
   },
   {path:'', redirectTo:'', pathMatch: 'full' },
   { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
