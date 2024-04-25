import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
interface Annonce {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  product_type: string;
  image_path: string;
}
@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.scss',
})
export class MyPageComponent implements OnInit {
  annonces: Annonce[] = [];
  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (localStorage.getItem('userid')) {
      this.route.paramMap.subscribe((params) => {
        const id = params.get('myParam');
        console.log(id + 'params', params);

        if (id) {
          this.accountService.getAnnonceById(id).subscribe((response: any) => {
            this.annonces = response;
          });
        }
      });
    } else {
      console.log();
      this.router.navigate(['login']);
    }
  }
}
