import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
//  encapsulation: ViewEncapsulation.Native, //allows you to ignore global styles
  selector: 'app-simple-form',
  template: `
    <p>
      {{message}}
      <input 
        #myInput 
        type="text" 
        [(ngModel)]="message"
        [ngClass]="{mousedown: isMouseDown}"
        (mousedown)="isMouseDown = true"
        (mouseup)="isMouseDown = false"
        (mouseleave)="isMouseDown = false"
      >
      <button 
        class="white bg-black code"
        (click)="onClick($event, myInput)"
      >
      Click me!
      </button>
      <button (click)="update.emit({text:message})"> Emit Event!</button>
    </p>
  `,
  styles: [`
    * {
      font-family: comic sans;
    }
    input:focus{
      font-weight: bold;
      outline: none;
    }
    button{
      border: none;
    }
    .mousedown{
      border: 2px solid green;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMouseDown;

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
