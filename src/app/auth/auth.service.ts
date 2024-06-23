import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === "Rivera" && password === "12345") {
      sessionStorage.setItem("isLogged", "true");
      return true; 
    } else {
      return false;
    }
  }
  logout():void{
    sessionStorage.clear()    
  }

  isLogged():boolean{
    return !!sessionStorage.getItem("isLogged");
  }

}
