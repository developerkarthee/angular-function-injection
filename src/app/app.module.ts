import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import TodoInjector, { todo } from './todo.func';
import  AppService  from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers : [
    AppService,{
    provide : TodoInjector,
    useFactory: todo,
    deps : [AppService]
  }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
