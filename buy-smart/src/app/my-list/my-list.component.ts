import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyListService } from './my-list.service';
import { Router } from '@angular/router';
import data from '../../assets/data/data.json';

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
    HttpClientModule,
  ],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss',
})
export class MyListComponent implements OnInit {
  annonces: Annonce[] = [];
  isShown = true;
  constructor(private router: Router, private myListService: MyListService) {}
  //public constructor(private ListService: MyListService) {}
  ngOnInit(): void {
    this.isShown = false;

    // getAnnonce(): Observable<Annonce[]> {
    //   return this.http.get<Annonce[]>(this.Annonce);
    // }
    this.showAnnonces();
  }
  moreDetails() {
    this.router.navigate(['details']);
  }
  showAnnonces() {
    this.myListService.getAnnonces().subscribe((response: any) => {
      this.annonces = response;
    });
  }
}
