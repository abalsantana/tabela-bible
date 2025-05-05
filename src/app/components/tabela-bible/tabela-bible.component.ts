// tabela-bible.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';

interface Biblia {
  capitulo: string;
  versiculo: string;
  sigla: string;
  livro: string;
}

@Component({
  selector: 'app-tabela-bible',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-bible.component.html',
  styleUrl: './tabela-bible.component.css'
})
export class TabelaBibleComponent {

  servico = new ServiceService();
  cards: Biblia[] = this.servico.api;

}
