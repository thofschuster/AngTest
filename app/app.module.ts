import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TodoAddComponent } from './todo-add.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
     ],
  declarations: [
     AppComponent,
     TodoAddComponent
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
