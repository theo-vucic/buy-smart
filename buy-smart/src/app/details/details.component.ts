import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DetailsService } from './details.service';
import { ActivatedRoute } from '@angular/router';
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
  imports: [CommonModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
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
