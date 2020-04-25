import { SettingsService } from './settings.service';
import { ForumService } from './forum.service';
import { AdminService } from './admin.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { LoginService } from './login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ForumComponent } from './forum/forum.component';
import { InterestComponent } from './interest/interest.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration.service';
import { ShowPostComponent } from './show-post/show-post.component';
import { PostService } from './post.service';
import { AuthGuard } from './auth.guard';
import { DefaultComponent } from './default/default.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddProfilePicComponent } from './add-profile-pic/add-profile-pic.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { UserTableComponent } from './user-table/user-table.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AddForumComponent } from './add-forum/add-forum.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ForumComponent,
    InterestComponent,
    DiscussionComponent,
    SettingsComponent,
    AboutUsComponent,
    AdminComponent,
    RegistrationComponent,
    ShowPostComponent,
    DefaultComponent,
    NavBarComponent,
    AddProfilePicComponent,
    PrivacyComponent,
    UserTableComponent,
    DeleteUserComponent,
    SearchResultComponent,
    AddForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    LoginService,
    AdminService,
    RegistrationService,
    PostService,
    ForumService,
    SettingsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
