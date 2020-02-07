import { ForumService } from './../forum.service';
import { SettingsService } from './../settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  forums: any[]
  forum_name: String
  constructor(private service: ForumService) { 
    this.loadForumCards()
  }

  ngOnInit() {
  }

  followForum(i: any)
  {
    this.service.followForum(this.forums[i]._id).subscribe(
      res => {
        const body = res as any
        console.log(body)
      }
    )
  }

   loadForumCards()
  {
    this.service.getAllForums().subscribe( 
      res => {
        const body = JSON.stringify(res);
        this.forums = JSON.parse(body) as any[];
        console.log(this.forums)
    })
  }

}
