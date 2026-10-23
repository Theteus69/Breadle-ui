import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CardLivro } from '../../livro/card-livro/card-livro';
import { AuthService } from '../../../core/services/auth-service';
import { LivrariaService } from '../../../core/services/livraria.service';
import { Livro } from '../../../core/models/livro';

@Component({
  selector: 'app-livraria',
  imports: [CardLivro, RouterLink],
  templateUrl: './livraria.html',
  styleUrl: './livraria.css',
})
export class Livraria {

  auth = inject(AuthService);
  livraria = inject(LivrariaService);

  remover(livro: Livro): void {
    this.livraria.remover(livro.id);
  }

}