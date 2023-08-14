import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ExponentPipes} from "./shared/pipes/exponent.pipes";
import { AgePipe } from './shared/pipes/age.pipe';
import {TodoService} from "./service/todo.service";
import { TodoListComponent } from './component/todo-list/todo-list.component';

@NgModule({
  declarations: [
      AppComponent,
      ExponentPipes,
      AgePipe,
      TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
