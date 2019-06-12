import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//firebase 
import {AngularFireModule } from 'angularfire2';
import { AngularFireDataBaseModule } from 'angulargire2/database'; 
import { environment } from '../enviroments/enviroment';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserComponent } from './components/users/user/user.component';

//components

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserComponent
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
