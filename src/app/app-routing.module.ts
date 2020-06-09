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
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
