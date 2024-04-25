import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { Observable, catchError, forkJoin, of } from 'rxjs';
import { response } from 'express';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';

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
  products_list: any[];
}

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

@Component({
  selector: 'app-example-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    RouterLink,
  ],
  templateUrl: './example-page.component.html',
  styleUrl: './example-page.component.scss',
})
export class ExamplePageComponent implements OnInit {
  products: Product[][] = [];
  userId: string = 'a43932ca-d557-4389-8b2f-9e40bbca0fa4';
  cart!: string[];
  userCart: string[] = [];
  isLoading = true;
  users: User[] = [];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUserCartById(this.userId).subscribe({
      next: (cart) => {
        cart.forEach((productId) => {
          this.productService
            .getProductById(productId)
            .subscribe((response: any) => {
              if (response) {
                this.products.push(response);
              }
            });
        });
        this.isLoading = false;
      },
    });
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total = total + this.products[i][0].price;
    }
    return total;
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}
