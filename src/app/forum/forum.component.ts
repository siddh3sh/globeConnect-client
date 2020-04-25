import { PostService } from './../post.service';
import { ForumService } from './../forum.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  pageBody: any

  constructor(private service: ForumService, private route: ActivatedRoute,
              private router: Router, private postService: PostService) {
    
    this.route.paramMap.subscribe(async result => {
      let forumId = result.get('id');
      await this.service.getSingleForum(forumId).subscribe(
        res => {
          const body = JSON.stringify(res);
        this.pageBody = JSON.parse(body) as any;
  
        console.log(this.pageBody)
        },
        err => {
          console.log(err)
        });
    });

   }

  ngOnInit() {
  }

  incLikes(i:any)
  {
      this.postService.incrLikes(this.pageBody.forumPosts[i]._id).subscribe(res => {
      //console.log(res)
      const response = res as any;
      this.pageBody.forumPosts[i].likes = response.likes
    })
  }
  
}
