import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      simple-form Works!
      <input #myInput type="text">
      <button (click)="onClick(myInput)">Click me!</button>
    </p>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick(value){
    console.log('clicked', value);
  }
  constructor() { }

  ngOnInit() {
  }

}
