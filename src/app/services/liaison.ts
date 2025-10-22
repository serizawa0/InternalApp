import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsommableCat, Famille } from '../interfaces/MaterielInterface';

@Injectable({
  providedIn: 'root'
})
export class Liaison {
  URL = 'http://192.168.1.175:3600/'
  constructor(
    private http:HttpClient
  ){}
  getStock(){
    return this.http.get<Famille[]>(this.URL+'stock')  
  }
  getConsommables(){
    return this.http.get<ConsommableCat[]>(this.URL+'consommables')  
  }
}
