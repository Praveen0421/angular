import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() myValue: string = '';
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }
  ngDoCheck(): void {
     console.log("ngDoCheck called");
  }
  ngAfterContentInit(): void {
     console.log("ngAfterContentInit called");
  }
  ngAfterContentChecked(): void {
     console.log("ngAfterContentChecked called");  
  }
  ngAfterViewInit(): void {
     console.log("ngAfterViewInit called");  
  }
  ngAfterViewChecked(): void {
     console.log("ngAfterViewInit called");  
  }
  ngOnDestroy(){
    console.log("ngDestroy called");
  }
}

