import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      simple-form Works!
      {{message}}
      <input #myInput type="text">
      <button (click)="onClick($event, myInput)">Click me!</button>
    </p>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick(event, value){
    console.log('clicked', value);
    console.log('Event', event);
  }
  constructor() { }

  ngOnInit() {
  }

}
