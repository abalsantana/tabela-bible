import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Biblia } from '../interfaces/biblia';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  };


