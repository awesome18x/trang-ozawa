import { LogoutComponent } from './auth/logout/logout.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { BangComponent } from './bang/bang.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuyDinhComponent } from './quy-dinh/quy-dinh.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { BieuDoComponent } from './bieu-do/bieu-do.component';


const routes: Routes = [
  {
    path: 'index',
    component: IndexPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'quy-dinh-moi',
        component: QuyDinhComponent
      },
      {
        path: 'gioi-thieu',
        component: GioiThieuComponent
      },
      {
        path: 'bieu-do',
        component: BieuDoComponent
      },
      {
        path: 'thanh-toan',
        component: ThanhToanComponent
      },
      {
        path: 'du-doan',
        component: BangComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
