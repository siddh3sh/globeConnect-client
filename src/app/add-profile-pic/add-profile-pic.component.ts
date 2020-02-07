import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile-pic',
  templateUrl: './add-profile-pic.component.html',
  styleUrls: ['./add-profile-pic.component.css']
})
export class AddProfilePicComponent implements OnInit {
  profilepic: any;
  imageUrl: string | ArrayBuffer;

  constructor(private service: SettingsService, private router: Router) { }

  ngOnInit() {
  }

  onSelectThumbnail(event) {
    this.profilepic = event.target.files[0];
   // console.log('filename' + this.filename)
    // const reader = new FileReader();
    // reader.onload = () => {
    //   console.log('reader result'+reader.result)
    //   this.imageUrl = reader.result;
    }
    // reader.readAsDataURL(this.filename);
  

  onAdd() {


    let result=this.service.addProfilePic(this.profilepic);//, this.mname,this.no
    result.subscribe(response => {
       // console.log("aaaaaaaaaaaaa"+response);
        // const body  = response.json();
        // if (body['status'] == 'success') {
         
        //   this.filename = undefined;
        //   this.imageUrl = undefined;
        // } else {
        //   alert()
        //   alert(body['error']);
        // }
        
      },
      error => {
        alert(error);
      });
  }

}
