import { Location } from '@angular/common';
import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { Container } from '../../../../shared/components/container/container';
import { AutorService } from '../../../../core/services/autor-service';
import { AutorFavoritoService } from '../../../../core/services/autor-favorito.service';
import { LivroService } from '../../../../core/services/livro-service';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-detalhes-autor',
  imports: [Container, RouterLink],
  templateUrl: './detalhes-autor.html',
  styleUrl: './detalhes-autor.css',
})
export class DetalhesAutor {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private autorService = inject(AutorService);
  private livroService = inject(LivroService);
  private favoritos = inject(AutorFavoritoService);
  private auth = inject(AuthService);

  private id = toSignal(
    this.route.paramMap.pipe(map(params => params.get('id') ?? '')),
    { requireSync: true }
  );

  readonly estrelas = [1, 2, 3, 4, 5];

  autor = computed(() => this.autorService.buscarPorId(this.id()));

  obras = computed(() => {
    const autor = this.autor();
    return autor ? this.livroService.listarPorAutor(autor.nome) : [];
  });

  favorito = computed(() => {
    const autor = this.autor();
    return autor !== undefined && this.favoritos.contem(autor.id);
  });

  // Se a foto não carregar, mostra um placeholder com as iniciais
  fotoFalhou = signal(false);

  iniciais = computed(() =>
    (this.autor()?.nome ?? '')
      .split(' ')
      .map(parte => parte[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()
  );

  private secaoObras = viewChild<ElementRef<HTMLElement>>('secaoObras');

  voltar(): void {
    this.location.back();
  }

  alternarFavorito(): void {
    const autor = this.autor();

    if (!autor) {
      return;
    }

    if (!this.auth.logado()) {
      this.router.navigate(['/login'], { queryParams: { voltar: this.router.url } });
      return;
    }

    this.favoritos.alternar(autor.id);
  }

  verObras(): void {
    this.secaoObras()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}