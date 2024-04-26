import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Annonce {
  Id: string;
  Nom: string;
  price: number;
  quantity: string;
  Description: string;
  product_type: string;
}

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getAnnonceById(id: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>('http://localhost:3300/products/' + id);
  }
  updateAnnonce(id: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>('http://localhost:3300/products/' + id);
  }
}
