import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { BangComponent } from './bang/bang.component';
import { BieuDoComponent } from './bieu-do/bieu-do.component';
import { QuyDinhComponent } from './quy-dinh/quy-dinh.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LogoutComponent } from './auth/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    GioiThieuComponent,
    BangComponent,
    BieuDoComponent,
    QuyDinhComponent,
    ThanhToanComponent,
    HomeComponent,
    LoginComponent,
    IndexPageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
