import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    {id: 0, text: "Woah"},
    {id: 1, text: "Excellent!"},
    {id:2, text: "Totally Heinous"}
  ];

  update(id, text){
    this.messages = this.messages.map(m => 
    m.id === id 
      ? {id,text}
      : m
    )
  }
  constructor() { }

}
