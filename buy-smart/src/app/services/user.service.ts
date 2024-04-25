import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
export class UserService {
  private baseUrl = '../../assets/data/data.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3300/users/');
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>('http://localhost:3300/users/' + userId);
  }

  getUserCartById(id: string): Observable<string[]> {
    return this.http
      .get<User[]>(`http://localhost:3300/users/${id}`)
      .pipe(map((users) => (users.length > 0 ? users[0].products_list : [])));
  }
}
