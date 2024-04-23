import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { MyListService } from './my-list.service';
import { Router } from '@angular/router';
import data from '../../assets/data/data.json';
interface Annonce {
  Id: string;
  Nom: string;
  Description: string;
  Categorie: string;
  Prix: number;
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
  constructor(private router: Router) {}
  //public constructor(private ListService: MyListService) {}
  ngOnInit(): void {
    this.isShown = false;

    // getAnnonce(): Observable<Annonce[]> {
    //   return this.http.get<Annonce[]>(this.Annonce);
    // }
  }
  moreDetails() {
    this.router.navigate(['details']);
  }
}
