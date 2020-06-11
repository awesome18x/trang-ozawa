import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js').done(() => {
    });

    $.getScript('../../../assets/script/script.js').done(() => {
    });
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.value.email === 'daitrang@gmail.com' && this.loginForm.value.password === '123456') {
      this.toastrService.success('Đăng nhập thành công', 'Thành công');
      this.router.navigateByUrl('/index/home');
    } else {
      this.toastrService.error('Tài khoản hoặc mật khẩu không đúng', 'Thất bại');
      return;
    }
  }

}
