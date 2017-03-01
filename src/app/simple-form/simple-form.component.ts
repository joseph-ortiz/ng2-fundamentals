import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      simple-form Works!
      <input #myInput type="text">
      <button (click)="onClick($event, myInput)">Click me!</button>
    </p>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick(event, value){
    console.log('clicked', value);
    console.log('Event', event);
  }
  constructor() { }

  ngOnInit() {
  }

}
