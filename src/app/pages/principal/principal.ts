import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./sidebar/sidebar";
import { UserService } from '../../services/user-service';
import { Liaison } from '../../services/liaison';
import { User } from '../../interfaces/personnelInterfaces';

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
  currentUser:User = {
    id:'',
    avatarFile:'default',
    depId:'',
    email:'',
    post:'',
    userName:'Unknown',
    Departement:{
      id:'', depName:''
    }
  } 
  token = localStorage.getItem('internalAppToken')
  constructor(
    private uS:UserService,
    private lS:Liaison
  ){
    if(this.token){
      console.log('token found')
      console.log(this.token)
      this.lS.checkToken(this.token).subscribe(
        data => {
          console.log(data)
          if(data.user!=null){
            this.uS.setCurrent(data.user).then(
              data => {
                this.uS.getCurrent().then(
                  user => {
                    this.currentUser = user
                    console.log(this.currentUser)
                  }

                ) 
              }
            )
          }
        }
      )
    }
  }
}
