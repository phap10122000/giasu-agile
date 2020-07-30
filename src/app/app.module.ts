import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, LoginComponent, AdminComponent, SignUpComponent, DashboardComponent, ContactComponent, ServiceComponent, NewsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
