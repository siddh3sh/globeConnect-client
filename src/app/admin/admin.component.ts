import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allUsers: any[]

  constructor(private service:  AdminService, private router: Router) {
    
    
   }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers()
  {
    this.service.allUsers().subscribe(
      res => {
        this.allUsers = res as any[]
      },
      error => {
        console.log(error)
      }
    )
  }

  blockUser(i: any)
  {
    this.service.blockUsers(this.allUsers[i]._id).subscribe(
      res => {
        console.log(res)
        // var blockBtn = document.getElementById("block-btn");
        // blockBtn.value = "Blocked"
        
      },
      error => {
        console.log(error)
      }
    )
      this.router.navigate(['/admin'])
  }

  deleteUser(i: any)
  {
    console.log('to delete: '+ this.allUsers[i]._id)
   this.service.deleteUser(this.allUsers[i]._id).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
     
  }

}
