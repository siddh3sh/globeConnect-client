import { SearchResultComponent } from './search-result/search-result.component';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForumComponent } from './forum/forum.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { InterestComponent } from './interest/interest.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth.guard';
import { PrivacyComponent } from './privacy/privacy.component';
import { UserTableComponent } from './user-table/user-table.component';


const routes: Routes = [
  //{path: '', component: LoginComponent, pathMatch: "full"},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'sign-up', component: RegistrationComponent},
  {path: 'forum/:id', component: ForumComponent},
  {path: 'interests', component: InterestComponent, canActivate: [AuthGuard]},
  {path: 'd/:id', component: DiscussionComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: 'privacy-policy', component: PrivacyComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-all-u', component: UserTableComponent},
  {path: 'search-result', component: SearchResultComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
