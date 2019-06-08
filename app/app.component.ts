import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <books-dashboard></books-dashboard>
     <h1> Hello{{name}}!</h1>
      <h1 [innerHTML]="name"></h1>
      
     <div>
      {{numberOne + numberTwo}}
     </div>
     <div>
      {{(isHappy) ? ':)' : ':('}}
     </div>
     <input type="text" [value]="name" (input)="handleInput($event)">
     <div>
     {{name}}
     </div>
     <button (click)="handleClick($event)">Change Name</button>
     
     <div>
     {{num}}
     </div>
     <button (click)="handleIncrementClick($event)">Increment</button>
     
     <button (click)="handleDecrementClick($event)" [disabled]="isDisabled">Decrement</button>
     <input type="text" [(ngModel)]="name"/>
     <div *ngIf="name.length>0">
     searching for {{  name  }}
     </div>
     <ul>
     <li *ngFor="let friend of friends; let i=index">
     {{  i  }}{{  friend  }}
     </li>
     </ul>
     </div>
  `
})
export class AppComponent {
  name:string;
  num:number=6;
  numberOne:number=5;
  numberTwo:number=5;
  isHappy:boolean=true;
  isDisabled:string="";
  friends:string[];
  constructor(){
    this.name="Reema";
    this.friends=["Raja","Rani"];
  }
  handleInput(event:any){
      this.name=event.target.value;
  }
  handleClick(event:any){
    this.name="Reema Roy"
  }
  handleIncrementClick(event:any){
    this.num++;
  }
  handleDecrementClick(event:any){
    if(this.num==1)
    this.isDisabled="disabled"
    this.num--;
  }
}
