import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3300/users/');
  }
}
