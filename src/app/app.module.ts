import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//firebase 
import {AngularFireModule } from 'angularfire2';
import { AngularFireDataBaseModule } from 'angulargire2/database'; 
import { environment } from '../enviroments/enviroment';

//components

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireDataBaseModule,
    Forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
