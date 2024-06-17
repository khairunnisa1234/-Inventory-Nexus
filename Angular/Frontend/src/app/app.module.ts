import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SlideModule } from './slide/slide.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule,Routes } from '@angular/router';


const routes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlideModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
