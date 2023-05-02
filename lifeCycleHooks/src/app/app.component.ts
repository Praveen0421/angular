import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycleHooks';
  isDestroy:Boolean = true;
  data:string ="";
  submitedValue(val:any):void{
  this.data = val.value;
  }
  destroy():void{
this.isDestroy = !this.isDestroy
  }
}

