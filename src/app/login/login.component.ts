import { AdminService } from './../admin.service';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
    email: String
    password: String
    


  constructor(private service: LoginService, private router: Router, private adminService: AdminService) { }

  validateUser()
  {

    this.service.validateLogin(this.email, this.password).subscribe(response => {
      const body = response as any
      //console.log(body.authtoken)
      localStorage.setItem('auth-token', body.authtoken);
      var decodedJwt = jwt_decode(localStorage.getItem('auth-token'));
      //console.log(decodedJwt)
      localStorage.setItem('user-id', decodedJwt._id)
      if (this.adminService.isAdmin()) {
        this.router.navigate(['/admin'])
      } else this.router.navigate(['/'])
    },error => {
      //console.log(error);
      alert(error.error)
    })
  }


  ngOnInit() {
  }

}
