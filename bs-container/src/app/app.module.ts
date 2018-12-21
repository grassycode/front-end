import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorsComponent } from './errors/errors.component';
import { AddPropertyComponent } from './content/add-property/add-property.component';
import { AddUnitComponent } from './content/add-unit/add-unit.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SidebarComponent,
    ContentComponent,
    ContactsComponent,
    ErrorsComponent,
    AddPropertyComponent,
    AddUnitComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CollapseModule,
    HttpClientModule,
    RouterModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
