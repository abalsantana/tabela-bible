import { Injectable } from '@angular/core';
import { Biblia } from '../components/interfaces/Biblia';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  api: Biblia[] = [
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
      'versiculo': '19',
      'sigla': 'Jó',
      'livro': 'Jóias'
    },
    {
      'capitulo': '13',
      'versiculo': '22',
      'sigla': 'Jd',
      'livro': 'Judas'
    },
    {
      'capitulo': '14',
      'versiculo': '10',
      'sigla': 'Jz',
      'livro': 'Juízes'
    
    }
  ]

}

