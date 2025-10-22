import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./sidebar/sidebar";

@Component({
  selector: 'app-principal',
  imports: [
    RouterOutlet,
    Sidebar
],
  templateUrl: './principal.html',
  styleUrl: './principal.scss'
})
export class Principal {

}
