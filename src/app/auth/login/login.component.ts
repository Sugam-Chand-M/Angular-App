import { Component,OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form:LoginForm={
    email:'',
    password:'',
  };


  constructor(private authService:AuthService){}


  ngOnInit(): void {
      
  }

  //isLoading:boolean=false;


  submit(){
    console.log(this.form);
    //alert(this.form);
    //if(this.isLoading) return;
    //this.isLoading=true;
    
    this.authService.login(this.form);

      
  }

  isLoading(){
    return this.authService.isLoading;
  }
}
