import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  userList: any[]
  constructor(private service: AdminService) { }

  ngOnInit() {
  }

  loadUsers()
  {
    this.service.allUsers().subscribe(
      res => {
        this.userList = res as any[]
        console.log(this.userList)
      }
    )
  }

}
