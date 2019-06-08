import { NgModule } from '@angular/core'
import { CommonModule }from '@angular/common'
import { BooksDashboardComponent }from './containers/books-dashboard/books-dashboard.component';
import { BookCountComponent }from './components/book-count/book-count.component';
import { BookDetailComponent }from './components/book-detail/book-detail.component';
 @NgModule({
    declarations:[BooksDashboardComponent,
    BookCountComponent,
    BookDetailComponent
],
    imports:[CommonModule],
    exports:[BooksDashboardComponent]
})
export class BooksDashboardModule{}