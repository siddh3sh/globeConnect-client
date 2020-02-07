import { AdminService } from './../admin.service';
import { PostService } from './../post.service';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  user : any
  posts: any[]
  title: String
  post: String
  forum: any
  
  

  constructor(private service: LoginService,private postService: PostService, private router: Router, private admin: AdminService) {
    
    this.loadPosts();
    this.getUser();
  }

  ngOnInit() {
    
  }

  loadPosts()
  {
    this.postService.showPost().subscribe( res => {
    
      const body = JSON.stringify(res);
      this.posts = JSON.parse(body) as any[];

      //console.log(this.posts)

    })
  }

  incLikes(i:any)
  {
      this.postService.incrLikes(this.posts[i]._id).subscribe(res => {
      //console.log(res)
      const response = res as any;
      this.posts[i].likes = response.likes
    })
  }

  isLoggedIn()
  {
    return this.service.isLoggedIn()
  }

  
  async addPost()
  {
    await this.postService.addPost(this.forum, this.title, this.post).subscribe(
      res => {
        // const body = res as any
        // console.log(body);
        this.posts.unshift(res)
        //console.log(res)
        
      })

      this.post = ""
      this.title = ""
      //this.router.navigate(['/home']);
      
  }
  
  // toDiscussion(i:any)
  // {
  //   this.service.getSinglePost(i).subscribe(
  //     res => {
  //       console.log(res)
  //       this.service.discussionBody = res as any;
  //     })
  //   this.router.navigate(['/d'])
  // }

  isAdmin()
  {
    if(this.isLoggedIn()) return this.admin.isAdmin();
    else return false
  }

  deletePost(i: any)
  {
    //console.log('to delete: '+ this.posts[i]._id)
    this.admin.deletePost(this.posts[i]._id).subscribe(
      res => {
        //console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }

  getUser()
  {
    this.service.getUser().subscribe(
      res => {
         this.user =res as any
         //console.log(this.user) 
      }
    )
  }

  selectForum(forum: String)
  {
    let forumId =  this.user.forums[this.user.forums.indexOf(forum)]._id;
    //console.log(this.forum)
  }

}
