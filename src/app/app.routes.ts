import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './auth.guard';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ChildregistrationComponent } from './components/childregistration/childregistration.component';
import { WomenregistrationComponent } from './womenregistration/womenregistration.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    //   canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'adduser', component: AdduserComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'users', component: UsersComponent },
      { path: 'childregistration', component: ChildregistrationComponent },
      { path: 'womenregistration', component: WomenregistrationComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
