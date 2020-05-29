import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  url = 'https://globe-connect.herokuapp.com/user'

  constructor(private http: HttpClient) { }

  addProfilePic(profilepic: any)
  {
    const formData = new FormData();
    //console.log('id: ' + localStorage.getItem('user-id') + ' profilepic: ' + profilepic)
    formData.append(`id`, localStorage.getItem('user-id'))
    formData.append('profilepic', profilepic)

    //console.log(formData.get('profilepic'))

    

    return this.http.post(this.url+'/pp', formData)
  }

  
}
