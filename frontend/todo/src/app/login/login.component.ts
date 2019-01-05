import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  showError = false;
  errorMessage = 'Password and Email does not exist'

  constructor(private router: Router,
     private hardcodedAuthenticationService : HarcodedAuthenticationService,
     private basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit() {
  }

  correctCredentials() {
    // if(this.username === "in28minutes" && this.password === "jaloom"){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
    this.router.navigate(['welcome', this.username]);
      this.showError = false;
    } else {
      this.showError = true;
    }
  }

  handleBasicAuthLogin() {
    // if(this.username === "in28minutes" && this.password === "jaloom"){
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username]);
          this.showError = false;
        },
        error => {
          console.log(error)
          this.showError = true;
        }
      )
    
     
    } 

    handleJWTAuthLogin() {
      // if(this.username === "in28minutes" && this.password === "jaloom"){
      this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username]);
            this.showError = false;
          },
          error => {
            console.log(error)
            this.showError = true;
          }
        )
      
       
      } 
  }

