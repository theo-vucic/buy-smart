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
export class HomeService {
  private baseUrl = '../../assets/data/data.json';

  constructor(private http: HttpClient) {}

  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`http://localhost:3300/products`);
  }
}
