import { Component } from '@angular/core';
import { Liaison } from '../../../../services/liaison';
import { Famille } from '../../../../interfaces/MaterielInterface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-equipement',
  imports: [
    NgClass
  ],
  templateUrl: './equipement.html',
  styleUrl: './equipement.scss'
})
export class Equipement {
  artSet = new Set<string>()
  familles:Famille[] = []
  constructor(
    private lB:Liaison
  ){
    this.lB.getStock().subscribe(
      data => {
        this.familles = data
        console.log(this.familles)
      }
    )
  }
  isArtOpen(id:string){
    return this.artSet.has(id)
  }
  toggleArtForm(id:string){
    if(!this.artSet.has(id)){
      this.artSet.clear()
      this.artSet.add(id)
    }
    else{
      this.artSet.clear()
    }
  }
}
