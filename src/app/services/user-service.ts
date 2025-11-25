import { Injectable } from '@angular/core';
import { User } from '../interfaces/personnelInterfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser:User|null = null
  async setCurrent(user:User){
    this.currentUser = user
    return 'okey'
  }
  async getCurrent(){
    if (this.currentUser) {
      return this.currentUser
    }
    else{
      const c:User = {
        id:'',
        avatarFile:'default',
        depId:'',
        email:'',
        post:'',
        userName:'Unknown',
        Departement:{
          depName:'', id:''
        }
      } 
      return  c
    }
  }
}
