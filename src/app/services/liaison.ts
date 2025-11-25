import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsommableCat, Famille } from '../interfaces/MaterielInterface';
import { Passage } from '../interfaces/eventInterfaces';
import { User } from '../interfaces/personnelInterfaces';

@Injectable({
  providedIn: 'root'
})
export class Liaison {
  URL = 'http://192.168.1.175:3600/'
  constructor(
    private http:HttpClient
  ){}
  //User
  login(userName:string, password:string){
    return this.http.post<{message:string, user:User|null, token:string|null}>(this.URL+'login', { userName, password })
  }
  logOut(value:string){
    return this.http.post<{message:string}>(this.URL+'logout', { value })
  }

  checkToken(value:string){
    return this.http.post<{message:string, user:User|null, token:string|null}>(this.URL+'checkToken', { value })
  }



  getStock(){
    return this.http.get<Famille[]>(this.URL+'stock')  
  }
  //Art
  addArt(id:string, abr:string, artName:string, quantity:number, unite:string){
    return this.http.post<string>(this.URL+'subEquipment', { id, abr, artName, quantity, unite })
  }
  dellArt(id:string){
    return this.http.post<string>(this.URL+'dellEquipment', { id })
  }


  //ArtCat
  addArtCat(id:string, abr:string, catName:string){
    return this.http.post<string>(this.URL+'addArtCat', { id, abr, catName })
  }
  deleteArtCat(id:string){
    return this.http.post<string>(this.URL+'deleteArtCat', { id })
  }


  //Family
  addFamily(abr:string, famName:string){
    return this.http.post<string>(this.URL+'addFamily', { abr, famName })
  }
  deleteFamily(id:string){
    return this.http.post<string>(this.URL+'deleteFamily', { id })
  }

  //Consommables
  getConsommables(){
    return this.http.get<ConsommableCat[]>(this.URL+'consommables')  
  }
  addConsommable(consommableCatId:string, libele:string, quantite:number, unite:string){
    return this.http.post<string>(this.URL+'addConsommable', { consommableCatId, libele, quantite, unite })
  }
  deleteConsommable(id:string){
    return this.http.post<string>(this.URL+'deleteConsommable', { id })
  }


  //ConsommableCat
  addConsommableCat(nomCat:string){
    return this.http.post<string>(this.URL+'addConsommableCat', { nomCat })
  }
  deleteConsommableCat(id:string){
    return this.http.post<string>(this.URL+'deleteConsommableCat', { id })
  }


  //Passages
  getPassages(date:Date){
    return this.http.post<Passage[]>(this.URL+'passages', { date })
  }

  deletePassage(id:string){
    return this.http.post<string>(this.URL+'deletePassage', { id })
  }
  editPassage(id:string, type:string){
    return this.http.post<string>(this.URL+'editPassage', { id, type })
  }
  launchExtraction(date:Date){
    return this.http.post<string>('http://192.168.1.175:3500/'+'passagesOfDay', { date })
  }
}
