import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public discussionBody: any

  url='https://globe-connect.herokuapp.com/content'
  
  

  constructor(private http: HttpClient) { }

  showPost()
  {
    return this.http.get(this.url)
  }

  incrLikes(id)
  {
    const body = {_id: id}
    return this.http.put(this.url, body)
  }

  

  getSinglePost(id: any)
  {
    return this.http.get(this.url + '/d/'+ id); 
  }

  addPost(forum: any, title:String, post: String)
  {
    const body = {
      title: title,
      content: post,
      user: localStorage.getItem('user-id'),
      forum: forum
    }
    //console.log(body)

    return this.http.post(this.url, body);
  }

  addComment( postId: any, comment: String)
  {
    const body = {
      content: comment,
      user: localStorage.getItem('user-id'),
      post: postId
    }

    return this.http.post(this.url +'/comment/', body);
  }

  showUserPost()
  {
    return this.http.get(this.url + `/userpl/${localStorage.getItem('user-id')}`)
  }

  search(query: String)
  {
    const body = {query: query}
    return this.http.post(this.url + '/search' ,  body)
  }
  

}
