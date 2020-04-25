import { logging } from 'protractor';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  thread: any
  comment: String

  constructor(private service: PostService,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router) {
      this.route.paramMap.subscribe(async result => {
        let postId = result.get('id');
        await this.service.getSinglePost(postId).subscribe(
          res => {
            const body = JSON.stringify(res);
          this.thread = JSON.parse(body) as any;
    
          //console.log(this.thread)
          },
          err => {
            console.log(err)
          });
      });
      
  }
   

  ngOnInit() {
  }

  async postComment()
  {
    await this.service.addComment(this.thread.post._id, this.comment).subscribe(
      res => {
        //console.log('postId: ' + this.thread.post._id + 'comment: '+ this.comment)
        //console.log(res)
        this.thread.comment.push(res)
      },
      error => {
        console.log(error.message)
      })

      this.comment = ''

    //this.router.navigate([`/d/${this.thread.post._id}`])
    
    
  }

  incLikes(i:any)
  {
      this.service.incrLikes(this.thread.post._id).subscribe(res => {
      //console.log(res)
      const response = res as any;
      this.thread.post.likes = response.likes
    })
  }

  isLoggedIn()
  {
    return this.loginService.isLoggedIn()
  }
}
