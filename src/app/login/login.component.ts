import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private service: ServiceService, private router: Router) {}
  username: string = '';
  password: string = '';
  message: any;

  doLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe((data) => {
      this.message = data;
      this.router.navigate(['/home']);
    });
  }
}
