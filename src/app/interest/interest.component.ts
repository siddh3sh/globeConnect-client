import { ForumService } from './../forum.service';
import { SettingsService } from './../settings.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  forums: any[]
  forum_name: String
  constructor(private service: ForumService, private domSanitizer: DomSanitizer) { 
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
        // console.log(this.forums)

        this.forums.forEach((forum)=>{
          //console.log(forum.display_pic);
          let img: String =  forum.display_pic.content;
          let imgType = forum.display_pic.contentType;
          forum.imageURL = this.domSanitizer.bypassSecurityTrustResourceUrl(`data:${imgType};base64,${img}`);
        })

    })
  } 
}
