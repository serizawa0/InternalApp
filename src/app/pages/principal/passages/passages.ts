import { Component } from '@angular/core';
import { Liaison } from '../../../services/liaison';
import { Passage } from '../../../interfaces/eventInterfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passages',
  imports: [
    CommonModule
  ],
  templateUrl: './passages.html',
  styleUrl: './passages.scss'
})
export class Passages {
  passages:Passage[] = []
  selectedDate = new Date()
  constructor(
    private lB:Liaison
  ){
    this.majList()
  }
  majList(){
    this.lB.getPassages(this.selectedDate).subscribe(
      data => {
        this.passages = data
        console.log(this.passages)
      }
    )
  }
  deletePassage(id:string){
    this.lB.deletePassage(id).subscribe(
      data => {
        console.log(data)
        this.majList()
      }
    )
  }
  changeList(date:string){
    this.selectedDate = new Date(date)
    this.majList()
  }

  getOption(value:string){
    if(value =='entrée'){
      return 'sortie'
    }
    else
      return 'entrée'
  }

  changeType(passage:Passage, type:string){
    // console.log(passage.type+' '+type)
    this.lB.editPassage(passage.id, type).subscribe(
      data => {
        this.majList()
      }
    )
  }
  launchExtract(){
    this.lB.launchExtraction(this.selectedDate).subscribe(
      data => {
        alert('Extraction terminée')
      }
    )
  }
}
