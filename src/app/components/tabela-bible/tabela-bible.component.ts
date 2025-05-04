// tabela-bible.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { Biblia } from '../interfaces/biblia';

@Component({
  selector: 'app-tabela-bible',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-bible.component.html',
  styleUrl: './tabela-bible.component.css'
})
export class TabelaBibleComponent {

  cards: Biblia[] = [
    {
      'capitulo': '01',
      'versiculo': '120',
      'sigla': 'Gn',
      'livro': 'Gênesis'
    },
    {
      'capitulo': '20',
      'versiculo': '120',
      'sigla': 'Ex',
      'livro': 'Êxodo'
    },
    {
      'capitulo': '33',
      'versiculo': '10',
      'sigla': 'Lv',
      'livro': 'Levítico'
    },
    {
      'capitulo': '31',
      'versiculo': '10',
      'sigla': 'Nr',
      'livro': 'Números'
    },
    {
      'capitulo': '12',
      'versiculo': '10',
      'sigla': 'Os',
      'livro': 'Oséias'
    },
    {
      'capitulo': '12',
      'versiculo': '10',
      'sigla': 'Jó',
      'livro': 'Jóias'
    }
  ]

}
