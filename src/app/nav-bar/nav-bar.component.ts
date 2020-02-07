import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  toggleHam: Boolean
  searchQ: String
  constructor(private service: LoginService, private router: Router, private postService: PostService) {
    this.toggleHam = false;
   }

  ngOnInit() {
    this.isLoggedIn()
  }

  isLoggedIn()
  {
    return this.service.isLoggedIn()
  }
  logOut()
  {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-id');
    this.router.navigate(['/home']);
  }

  toggleBurger()
  {
    this.toggleHam = !this.toggleHam;

    if (this.toggleHam) {
      let activate1 = document.getElementById('navbarExampleTransparentExample')
      let activate2 = document.getElementById('burger')
      activate1.classList.add('is-active')
      activate2.classList.add('is-active')
    } else {
      let activate1 = document.getElementById('navbarExampleTransparentExample')
      let activate2 = document.getElementById('burger')
      activate1.classList.remove('is-active')
      activate2.classList.remove('is-active')
    }

    
  }
  contractBurger()
  {
    var activate1 = document.getElementById('navbarExampleTransparentExample')
    var activate2 = document.getElementById('burger')
    activate1.classList.remove('is-active')
    activate2.classList.remove('is-active')

  }

  async searchPost()
  {
    if (sessionStorage.getItem('search-result')) {
      sessionStorage.removeItem('search-result');
    }
    this.postService.search(this.searchQ).subscribe(
      res => {
        const body = res as any
        console.log(body)
        sessionStorage.setItem('search-result', JSON.stringify(body))
        this.router.navigate(['/search-result']);
      },
      error => {
        console.log(error)
      }
    )
  }

}
