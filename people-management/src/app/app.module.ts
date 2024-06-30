import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { EditPersonFormComponent } from './edit-person-form/edit-person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    AddPersonFormComponent,
    EditPersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
