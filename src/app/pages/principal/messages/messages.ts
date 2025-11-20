import { Component } from '@angular/core';
import { PersonnalMessages } from "./personnal-messages/personnal-messages";
import { GroupMessages } from "./group-messages/group-messages";

@Component({
  selector: 'app-messages',
  imports: [
    PersonnalMessages,
    GroupMessages
],
  templateUrl: './messages.html',
  styleUrl: './messages.scss'
})
export class Messages {

}
