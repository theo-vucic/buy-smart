import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss',
})
export class MyListComponent implements OnInit {
  isShown = true;
  ngOnInit(): void {
    this.isShown = false;
  }
  ListA = [
    {
      name: 'Item1',
    },
    {
      name: 'Item2',
    },
    {
      name: 'Item3',
    },
    {
      name: 'Item4',
    },
    {
      name: 'Item5',
    },
    {
      name: 'Item6',
    },
  ];
  Show() {
    this.isShown = !this.isShown;
  }
}
