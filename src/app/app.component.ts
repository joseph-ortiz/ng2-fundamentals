import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this ng2 app works!';
  
  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api
    ){}
}
