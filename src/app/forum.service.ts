import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  url = "http://13.126.22.154:9669"

  getAllForums()
  {
    return this.http.get(this.url + '/forum')
  }

  followForum(forumId: any)
  {
    const body = {
      forum: forumId,
      user: localStorage.getItem('user-id')
    }

    return this.http.put(this.url+'/user/follow-forum' , body)
  }

  getSingleForum(id: any)
  {
    return this.http.get(this.url + `/forum/${id}`)
  }

}
