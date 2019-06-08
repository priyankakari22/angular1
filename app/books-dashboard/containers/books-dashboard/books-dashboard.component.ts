import{Component}from '@angular/core'
import { Book } from '../../models/books.interface';

@Component({
    selector:"books-dashboard",
    template:`
    <div>
    <h1>Books Dashboard</h1>
    <p> Total Books :{{Books.length}}</p>
    <hr/>
    <ul>
    <li *ngFor="let book of books; let i=index">
    <div>
    <h1>{{book.title}}</h1>
    <span>{{book.published}}</span>
    <hr/>
    </div>
    </li>
    </ul>
    </div>
    `
})

export class BooksDashboardComponent{
    books:Book[]=[
        {
            id:1,
            title:"Node Fundamentals",
            published:2015,
            instock:false
        },
        {
            id:2,
            title:"HTML Fundamentals",
            published:2014,
            instock:true
        },
        {
            id:3,
            title:"JS Funadmentals",
            published:2013,
            instock:false
        }
    ]

}

