import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Liaison } from '../../services/liaison';

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
    private lB:Liaison
  ){
    this.loginForm = this.fB.group({
      userName:'', 
      password:''
    })
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
        if(typeof(data.data)=='object'){
          this.router.navigate(['main'])
        }
        else{
          console.log(data.data)
        }
      }
    )

  }
}
