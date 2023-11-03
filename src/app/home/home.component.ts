import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private service: ServiceService) {}
  users: any;

  getUsers() {
    let resp = this.service.getUsers();
    resp.subscribe((data) => (this.users = data));
  }
}
