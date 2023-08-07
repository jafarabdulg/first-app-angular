import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloComponent} from "./hello/hello.component";
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { SideComponent } from './shared/component/side/side.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    SideComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
