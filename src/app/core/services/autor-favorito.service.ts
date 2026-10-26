import { Injectable, computed, inject, signal } from '@angular/core';

import { AuthService } from './auth-service';

// { "email@exemplo.com": ["jk-rowling", "dan-brown"] }
type FavoritosPorUsuario = Record<string, string[]>;

@Injectable({
  providedIn: 'root'
})
export class AutorFavoritoService {

  private readonly STORAGE_KEY = 'breadle_autores_favoritos';

  private auth = inject(AuthService);

  private favoritos = signal<FavoritosPorUsuario>(this.carregar());

  readonly ids = computed<readonly string[]>(() => {
    const usuario = this.auth.usuario();
    return usuario ? (this.favoritos()[usuario.email] ?? []) : [];
  });

  contem(autorId: string): boolean {
    return this.ids().includes(autorId);
  }

  alternar(autorId: string): void {
    const usuario = this.auth.usuario();

    if (!usuario) {
      return;
    }

    const ids = this.contem(autorId)
      ? this.ids().filter(id => id !== autorId)
      : [...this.ids(), autorId];

    const atualizado = { ...this.favoritos(), [usuario.email]: ids };
    this.favoritos.set(atualizado);

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(atualizado));
    } catch {
      // Armazenamento indisponível: segue só em memória
    }
  }

  private carregar(): FavoritosPorUsuario {
    try {
      const salvo = localStorage.getItem(this.STORAGE_KEY);
      const dados: unknown = salvo ? JSON.parse(salvo) : {};

      return dados && typeof dados === 'object' && !Array.isArray(dados)
        ? (dados as FavoritosPorUsuario)
        : {};
    } catch {
      return {};
    }
  }

}