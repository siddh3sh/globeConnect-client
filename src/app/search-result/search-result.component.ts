import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchResult: any[]

  constructor() {
    this.displaySearchResult()
   }

  ngOnInit() {
    
  }

  displaySearchResult()
  {
    this.searchResult = JSON.parse(sessionStorage.getItem('search-result'));
  }

}
