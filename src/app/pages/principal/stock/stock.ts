import { Component } from '@angular/core';
import { Famille } from '../../../interfaces/MaterielInterface';
import { Liaison } from '../../../services/liaison';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-stock',
  imports: [
    RouterOutlet
  ],
  templateUrl: './stock.html',
  styleUrl: './stock.scss'
})
export class Stock {
  constructor(
    private router:Router
  ){}
  navigate(dest:string){
    this.router.navigate(['/stock/'+dest])
  }
}
