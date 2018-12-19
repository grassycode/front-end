import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from 'src/app/content/content.component';
import { ContentService } from 'src/app/content/content.service';
import {HttpClientModule} from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainRoutingModule,
    RouterModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
