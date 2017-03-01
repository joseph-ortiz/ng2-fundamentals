import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      {{message}}
      <input #myInput type="text" [(ngModel)]="message">
      <button (click)="onClick($event, myInput)">Click me!</button>
      <button (click)="update.emit({text:message})"> Emit Event!</button>
    </p>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  onClick(event, value){
    console.log('clicked', value);
    console.log('Event', event);
  }
  constructor() { }

  ngOnInit() {
  }

}
