import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  product_type: string;
  image_path: string;
  user_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = '../../assets/data/data.json';

  constructor(private http: HttpClient) {}

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(
      'http://localhost:3300/products/' + productId
    );
  }
}
