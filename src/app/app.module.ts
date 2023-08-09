import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloComponent} from "./hello/hello.component";
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { SideComponent } from './shared/component/side/side.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ChildComponent } from './child/child.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    SideComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    ChildComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
