import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any

  constructor(private service: PostService) {
    this.showUsersPosts()
   }

  ngOnInit() {
  }

  showUsersPosts()
  {
    this.service.showUserPost().subscribe(
      res => {
        this.user = res
        //console.log(this.user)
      }
    )
  }

  toggleModal()
  {
    var ele = document.getElementById('mod');
    ele.classList.remove('hidden');
    ele.classList.add('is-active');
  }

  removeModal()
  {
    const i = true;
    if (i) {
      var ele = document.getElementById('mod');
      ele.classList.remove('is-active');
      ele.classList.add('hidden');
    }
    location.reload()
    
  }

  
  incLikes(i:any)
  {
      this.service.incrLikes(this.user.posts[i]._id).subscribe(res => {
      //console.log(res)
      const response = res as any;
      this.user.posts[i].likes = response.likes
    })
  }
}
