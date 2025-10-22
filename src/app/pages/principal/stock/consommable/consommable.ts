import { Component, signal } from '@angular/core';
import { Liaison } from '../../../../services/liaison';
import { ConsommableCat } from '../../../../interfaces/MaterielInterface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-consommable',
  imports: [
    NgClass
  ],
  templateUrl: './consommable.html',
  styleUrl: './consommable.scss'
})
export class Consommable {
  inputSets = new Set<string>()
  actionSet = new Set<string>()
  consommablesCat:ConsommableCat[] = []
  isDropFormOpen = signal(false)
  constructor(
    private lB:Liaison
  ){
    this.lB.getConsommables().subscribe(
      data => {
        this.consommablesCat = data
      }
    )
  }
  toggleAjoutCat(){
    this.isDropFormOpen.update(v => !v)
  }
  checkValue(libele:string, quantite:string, unite:string, id:string){
    console.log(libele+' '+quantite+' '+unite+' '+id)
  }
  toogleForm(id:string){
    if(!this.inputSets.has(id)){
      this.inputSets.clear()
      this.inputSets.add(id)
    }
    else{
      this.inputSets.delete(id)
    }
  }
  isOpen(id:string):boolean{
    return this.inputSets.has(id)
  }
  toggleAction(id:string){
    if(this.actionSet.has(id)){
      this.actionSet.clear()
    }
    else{
      this.actionSet.clear()
      this.actionSet.add(id)
    }
  }

  isActionOpen(id:string){
    return this.actionSet.has(id)
  }
}
