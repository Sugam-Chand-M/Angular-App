import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated:boolean=false;
  isLoading:boolean=false;
  login(form:LoginForm){
    if(this.isLoading) return;
    this.isLoading=true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        //const user = userCredential.user;
        //alert('Yeah Login successful');
        this.isAuthenticated=true;
        this.router.navigate(['']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //alert('Credentials does not match our records')
        this.isAuthenticated=false;
      })
      .finally(()=>(this.isLoading=false));
  }

  passwordMatched: boolean = true;
  register(form:RegisterForm){
    if(form.password!=form.confirm_password){
      this.passwordMatched=false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in 
      this.isAuthenticated=true;
      this.router.navigate(['']);
      // ...
    })
    .catch((error) => {
      this.isAuthenticated=false;
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
      this.isAuthenticated=false;
    }).catch((error) => {
      // An error happened.
    });
  }


  constructor(private router:Router) { }
}
