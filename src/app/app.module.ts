import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { BangComponent } from './bang/bang.component';
import { BieuDoComponent } from './bieu-do/bieu-do.component';
import { QuyDinhComponent } from './quy-dinh/quy-dinh.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GioiThieuComponent,
    BangComponent,
    BieuDoComponent,
    QuyDinhComponent,
    ThanhToanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
