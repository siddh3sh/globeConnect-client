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
    var ele = document.getElementById('mod');
    ele.classList.remove('is-active');
    ele.classList.add('hidden');
  }
}
