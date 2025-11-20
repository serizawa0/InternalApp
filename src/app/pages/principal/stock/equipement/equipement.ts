import { Component, signal } from '@angular/core';
import { Liaison } from '../../../../services/liaison';
import { ArtCat, Famille } from '../../../../interfaces/MaterielInterface';
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
  addCat = new Set<string>()
  showFamillyAdd = false
  fadeOut = false
  artSet = new Set<string>()
  familles:Famille[] = []
  constructor(
    private lB:Liaison
  ){
    this.majStock()
  }

  majStock(){
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

  toggleAjoutFamille(){
    this.fadeOut = !this.fadeOut;
    // attendre la fin du fade-out avant de montrer l'input
    setTimeout(() => {
        this.showFamillyAdd = !this.showFamillyAdd;
      }, 300); // même durée que la transition CSS
    }
  
  isAddCat(id:string){
    return this.addCat.has(id)
  }

  toggleAddCat(id:string){
    if(this.addCat.has(id)){
      this.addCat.clear()
    }
    else{
      this.addCat.add(id)
    }
  }
  addArt(artcat:ArtCat, abr:string, artName:string, quantity:string, unite:string){
    if(this.addArtValid(abr,artName,quantity,unite)==false){
      // console.log(artcat.catName)
      const q = parseFloat(quantity)
      // console.log(abr+' '+artName+' '+q+' '+unite)
      this.lB.addArt(artcat.id, abr, artName, q, unite).subscribe(
        data => {
          this.majStock()
        }
      )
    }
  }
  addArtValid(abr:string, artName:string, quantity:string, unite:string){
    const allEmpty = [abr,artName,quantity,unite].every(str => str ==='')
    return  allEmpty
  }

  delArt(id:string){
    this.lB.dellArt(id).subscribe(
      data => {
        this.majStock()
      }
    )
  }

  addArtCat(id:string, abr:string, catName:string){
    this.lB.addArtCat(id,abr,catName).subscribe(
      data => {
        this.majStock()
      }
    )
  }
  dellArtCat(id:string){
    this.lB.deleteArtCat(id).subscribe(
      data => {
        this.majStock()
      }
    )
  }

  //Family
  addFamily(abr:string, famName:string){
    const isEmpty = [abr,famName].every(str => str ==='')
    if(!isEmpty){
      this.lB.addFamily(abr,famName).subscribe(
        data => {
          this.majStock()
        }
      )
      // console.log('okey')
    }
  }
  dellFamily(id:string){
    this.lB.deleteFamily(id).subscribe(
      data => {
        this.majStock()
      }
    )
  }
}
