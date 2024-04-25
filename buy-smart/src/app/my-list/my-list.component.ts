import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';

import { MyListService } from './my-list.service';
import { Params, Router } from '@angular/router';

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
  selector: 'app-my-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSliderModule,
  ],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss',
})
export class MyListComponent implements OnInit {
  annonces: Annonce[] = [];
  isShown = true;
  constructor(private router: Router, private myListService: MyListService) {}
  ngOnInit(): void {
    this.isShown = false;
    this.showAnnonces();
  }
  moreDetails(id: string) {
    const queryParams: Params = { myParam: id };
    this.router.navigate(['details', queryParams]);
  }
  showAnnonces() {
    this.myListService.getAnnonces().subscribe((response: any) => {
      this.annonces = response;
    });
  }
}
