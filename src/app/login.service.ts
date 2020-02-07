import { url } from 'inspector';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:9669/auth'

  urlU = 'http://localhost:9669/user'

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
