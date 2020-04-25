import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchResult: any[]

  constructor(private service: PostService) {
    this.displaySearchResult()
   }

  ngOnInit() {
    
  }

  displaySearchResult()
  {
    this.searchResult = JSON.parse(sessionStorage.getItem('search-result'));
  }

  incLikes(i:any)
  {
      this.service.incrLikes(this.searchResult[i]._id).subscribe(res => {
      //console.log(res)
      const response = res as any;
      this.searchResult[i].likes = response.likes
    })
  }

}
