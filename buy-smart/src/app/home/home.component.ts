import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { HomeService } from './home.service';
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
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSliderModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  annonces: Annonce[] = [];
  isShown = true;
  constructor(private router: Router, private homeService: HomeService) {}
  ngOnInit(): void {
    this.isShown = false;
    this.showAnnonces();
  }

  showAnnonces() {
    this.homeService.getAnnonces().subscribe((response: any) => {
      this.annonces = response;
    });
  }
}
