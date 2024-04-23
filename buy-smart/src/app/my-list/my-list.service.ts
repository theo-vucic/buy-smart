import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Annonce {
  Id: string;
  Nom: string;
  Description: string;
  Categorie: string;
  Prix: number;
}

@Injectable({
  providedIn: 'root',
})
export class MyListService {
  private baseUrl = '../../assets/data/data.json';

  constructor(private http: HttpClient) {}

  getComments(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseUrl}`);
  }
}
