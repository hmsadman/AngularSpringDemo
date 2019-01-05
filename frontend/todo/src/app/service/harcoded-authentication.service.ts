import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('before ' + this.isUserLoggedIn());
    if (username === "in28minutes" && password === "jaloom") {
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after ' + this.isUserLoggedIn());
      return true;

    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
