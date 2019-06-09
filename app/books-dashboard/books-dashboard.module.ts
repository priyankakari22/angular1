import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//containers
import { BooksDashboardComponent } from './container/books-dashboard/books-dashboard.component'

//components
import { BookCountComponent } from './components/books-count/books-count.component'
import { BookDetailComponent } from './components/books-detail/books-detail.component'

@NgModule({
    declarations:[
        BooksDashboardComponent,
        BookCountComponent,
        BookDetailComponent
    ],
    imports:[CommonModule],
    exports:[BooksDashboardComponent]
})
export class BooksDashboardModule{}