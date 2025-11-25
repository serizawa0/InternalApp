import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user-service';
import { User } from '../../../interfaces/personnelInterfaces';
import { idText, isThisTypeNode } from 'typescript';
import { Liaison } from '../../../services/liaison';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() currentUser:User = {id:'',avatarFile:'', depId:'', email:'', post:'', userName:'', Departement:{ depName:'', id:'' }}
  constructor(
    private router:Router,
    private uS:UserService,
    private lS:Liaison
  ){
    this.uS.getCurrent().then(
      data => {
        if (data==null) {
          this.currentUser = {id:'',avatarFile:'', depId:'', email:'', post:'', userName:'', Departement:{ depName:'', id:'' }}
        }
        else{
          this.currentUser = data
        }
        console.log(this.currentUser)
      }
    )
  }
  navigateTo(dest:string){
    this.router.navigate([dest])
  }

  logOut(){
    const token = localStorage.getItem('internalAppToken')
    if(token){
      localStorage.removeItem('internalAppToken')
      this.lS.logOut(token).subscribe(
        data => {
          this.router.navigate([''])
        }
      )
    }
  }
}
