import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-component.component.html',
  styleUrl: './page-component.component.scss',
})
export class PageComponentComponent implements OnInit {
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
