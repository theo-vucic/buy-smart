import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-component.component.html',
  styleUrl: './page-component.component.scss',
})
export class PageComponentComponent {
  isShown = true;
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
