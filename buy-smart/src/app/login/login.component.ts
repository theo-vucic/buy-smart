import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
interface User {
  id: string;
  firstname: string;
  lastname: string;
  address: string;
  password: string;
  creation_date: string;
  birthday: string;
  phone_number: string;
  username: string;
  products_list: string[];
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  hide = true;
  users: User[] = [];
  username: string = '1tsLin';
  password: string = '123456789';

  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
    console.log('userid', localStorage.getItem('userid'));
    this.getUsers();
  }
  getUsers() {
    this.loginService.getUsers().subscribe((response: any) => {
      this.users = response;
      console.log('users', this.users);
    });
  }
  onSubmit() {
    console.log('submit');

    for (let i = 0; i < this.users.length - 1; i++) {
      if (
        this.users[i].username == this.username &&
        this.users[i].password == this.password
      ) {
        console.log('userid', this.users[i].id);
        localStorage.setItem('userid', this.users[i].id);
        console.log('localstor', localStorage.getItem('userid'));
      }
    }
  }
}
