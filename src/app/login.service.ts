import { url } from 'inspector';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://globe-connect.herokuapp.com/auth'

  urlU = 'https://globe-connect.herokuapp.com/user'

  constructor(private http: HttpClient) { }

  validateLogin(email: String, password: String)
  {
   const user = {
     email: email,
     password: password

    }
    return this.http.post(this.url, user)
  }

  isLoggedIn()
  {
    return !!localStorage.getItem('auth-token');
  }

  getUser()
  {
    return this.http.get(this.urlU + `/${localStorage.getItem('user-id')}`)
  }

  
}     
