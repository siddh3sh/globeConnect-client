import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = "https://globe-connect.herokuapp.com/admin"

  urlP = "https://globe-connect.herokuapp.com/content"
  constructor(private http: HttpClient) { }

  allUsers()
  {
    
    return this.http.get(this.url )
  }

  isAdmin()
  {
    let decodedJwt = jwt_decode(localStorage.getItem('auth-token'));
    return decodedJwt.isAdmin;
  }

  blockUsers(i: any)
  {
    return this.http.get(this.url + `/${i}`)
  }

  deleteUser(i: any)
  {
    return this.http.delete(this.url + `/${i}`)
  }

  deletePost(i: any)
  {
    return this.http.delete(this.urlP + `/${i}`)
  }
}
