import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BooksDashboardModule } from './books-dashboard/books-dashboard.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BooksDashboardModule
  ],
  bootstrap: [
    AppComponent
  ]
 
})
export class AppModule {}