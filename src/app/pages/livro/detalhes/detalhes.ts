import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { Container } from '../../../shared/components/container/container';
import { CapaLivro } from '../../../shared/components/capa-livro/capa-livro';
import { LivroService } from '../../../core/services/livro-service';
import { LivrariaService } from '../../../core/services/livraria.service';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-detalhes',
  imports: [Container, CapaLivro, RouterLink],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css',
})
export class Detalhes {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private livroService = inject(LivroService);
  private livraria = inject(LivrariaService);
  private auth = inject(AuthService);

  private id = toSignal(
    this.route.paramMap.pipe(map(params => Number(params.get('id')))),
    { requireSync: true }
  );

  livro = computed(() => this.livroService.buscarPorId(this.id()));

  naLivraria = computed(() => {
    const livro = this.livro();
    return livro !== undefined && this.livraria.contem(livro.id);
  });

  alternarLivraria(): void {
    const livro = this.livro();

    if (!livro) {
      return;
    }

    // A livraria é particular de cada usuário, então é preciso estar logado
    if (!this.auth.logado()) {
      this.router.navigate(['/login'], { queryParams: { voltar: this.router.url } });
      return;
    }

    this.livraria.alternar(livro.id);
  }

}