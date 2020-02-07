import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name = ''
  username = ''
  email = ''
  password = ''
  bio = ''
  body: any

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit() {
  }

  register()
  {
     this.service.register(this.name, this.username, this.email,this.bio, this.password).subscribe(res => { 
      this.body = res;
      //console.log(this.body);
      localStorage.setItem('auth-token', this.body.authtoken);
      var decodedJwt = jwt_decode(localStorage.getItem('auth-token'));
      //console.log(decodedJwt)
      localStorage.setItem('user-id', decodedJwt._id)
      this.router.navigate(['/interests'])
    },error => {
      alert(error.error);})
    
  }

}
