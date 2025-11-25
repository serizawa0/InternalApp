import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Liaison } from '../../services/liaison';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm:FormGroup
  constructor(
    private fB:FormBuilder,
    private router:Router,
    private lB:Liaison,
    private uS:UserService
  ){
    this.loginForm = this.fB.group({
      userName:'', 
      password:''
    })
    const token = localStorage.getItem('internalAppToken')
    if(token){
      console.log(token)
      this.router.navigate(['main'])
    }
  }
  isValid(){
    return (this.loginForm.get('userName')?.value&&this.loginForm.get('password')?.value)
  }

  validate(){
    // this.router.navigate(['main'])
    const userName = this.loginForm.get('userName')?.value
    const password = this.loginForm.get('password')?.value
    this.lB.login(userName, password).subscribe(
      data => {
        if(data.user){
          const u = data.user
          console.log(data)
          localStorage.setItem('internalAppToken', ''+data.token)
          this.router.navigate(['main'])
        }
        else{
          window.alert(data.message)
        }
      }
    )

  }
}
