import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = 'http://13.126.22.154:9669/user'

  constructor(private http: HttpClient) { }

  register(name: String, username: String, email: String,bio: String, password: String)
  {
    const body = {
      name: name,
      username: username,
      email: email,
      password: password,
      bio: bio
    }

    return this.http.post(this.url, body)
  }

  getUserDetails()
  {
    this.http.get(this.url + `/${localStorage.getItem('user-id')}`)
  }
}
