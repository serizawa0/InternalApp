import { Component } from '@angular/core';
import { PersonnalMessages } from "./personnal-messages/personnal-messages";
import { GroupMessages } from "./group-messages/group-messages";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-messages',
  imports: [
    RouterOutlet
],
  templateUrl: './messages.html',
  styleUrl: './messages.scss'
})
export class Messages {
  constructor(
    private router:Router
  ){}
  navigateTo(dest:string){
    this.router.navigate(['/main/messages/'+dest])
  }
}
