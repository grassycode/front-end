import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { MainModule } from './main.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
