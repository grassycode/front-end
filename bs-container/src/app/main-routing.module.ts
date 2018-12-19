import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from 'src/app/content/content.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path: 'property', component: ContentComponent },
  { path: '', redirectTo: '/property', pathMatch: 'full'},
  { path: '**', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})], // [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class MainRoutingModule { }
