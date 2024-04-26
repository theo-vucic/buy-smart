import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DetailsService } from './details.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
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
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  hide = true;
  annonces: Annonce[] = [];
  constructor(
    private detailservice: DetailsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('myParam');
      console.log(id + 'params', params);

      if (id) {
        this.detailservice.getAnnonceById(id).subscribe((response: any) => {
          this.annonces = response;
        });
      }
    });
  }
}
