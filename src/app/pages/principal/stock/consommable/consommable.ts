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
  addCat = signal(false)
  fadeOut = false
  inputSets = new Set<string>()
  actionSet = new Set<string>()
  consommablesCat:ConsommableCat[] = []
  isDropFormOpen = signal(false)
  constructor(
    private lB:Liaison
  ){
    this.majConsommables()
  }
  majConsommables(){
    this.lB.getConsommables().subscribe(
      data => {
        this.consommablesCat = data
      }
    )
  }

  copie(text:string){
    const t = ''+text 
    navigator.clipboard.writeText(t).then(
      () => {
        console.log('texte copié')
      }
    ).catch(
      err => {
        console.log('Error', err)
      }
    )
  }

  toggleAddCat(){
    this.addCat.update(
      (addCat) => !addCat
    )
  }

  checkValue(libele:string, quantite:string, unite:string, id:string){
    const hasEmpty = [libele, quantite, unite].some(str =>  str.trim() ==='')
    if(!hasEmpty){
      this.addConsommable(id, libele, quantite, unite)
    }
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

  //Consommable
  addConsommable(consommableCatId:string, libele:string, quantite:string, unite:string){
    const q = parseInt(quantite)
    this.lB.addConsommable(consommableCatId, libele, q, unite).subscribe(
      data => {
        this.majConsommables()
      }
    ) 
  }
  deleteConsommable(id:string){
    this.lB.deleteConsommable(id).subscribe(
      data => {
        this.majConsommables()
      }
    )
  }

  //ConsommableCat
  checkInput(nomCat:string){
    const isEmpty = nomCat.trim() === ''
    if(!isEmpty)
      this.addConsommableCat(nomCat)
  }

  addConsommableCat(nomCat:string){
    this.lB.addConsommableCat(nomCat).subscribe(
      data => {
        this.majConsommables()
      }
    )
  }
  deleteConsommableCat(id:string){
    this.lB.deleteConsommableCat(id).subscribe(
      data => {
        this.majConsommables()
      }
    )
  }
}
