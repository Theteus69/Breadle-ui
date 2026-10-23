import { Injectable, computed, inject, signal } from '@angular/core';

import { Livro } from '../models/livro';
import { AuthService } from './auth-service';
import { LivroService } from './livro-service';

// Cada usuário tem a sua própria livraria: { "email@exemplo.com": [1, 5, 12] }
type LivrariasPorUsuario = Record<string, number[]>;

@Injectable({
  providedIn: 'root'
})
export class LivrariaService {

  private readonly STORAGE_KEY = 'breadle_livrarias';

  private auth = inject(AuthService);
  private livroService = inject(LivroService);

  private livrarias = signal<LivrariasPorUsuario>(this.carregar());

  // IDs dos livros da livraria do usuário logado (vazio se ninguém estiver logado)
  readonly ids = computed<readonly number[]>(() => {
    const usuario = this.auth.usuario();
    return usuario ? (this.livrarias()[usuario.email] ?? []) : [];
  });

  // Livros da livraria, na ordem em que foram adicionados
  readonly livros = computed<Livro[]>(() =>
    this.ids()
      .map(id => this.livroService.buscarPorId(id))
      .filter((livro): livro is Livro => livro !== undefined)
  );

  readonly total = computed(() => this.livros().length);

  contem(livroId: number): boolean {
    return this.ids().includes(livroId);
  }

  // Devolve true se o livro passou a estar na livraria, false se foi removido
  // (ou se não há usuário logado, caso em que nada é alterado)
  alternar(livroId: number): boolean {
    if (this.contem(livroId)) {
      this.remover(livroId);
      return false;
    }

    return this.adicionar(livroId);
  }

  adicionar(livroId: number): boolean {
    const usuario = this.auth.usuario();

    if (!usuario || this.contem(livroId)) {
      return this.contem(livroId);
    }

    this.salvar(usuario.email, [...this.ids(), livroId]);
    return true;
  }

  remover(livroId: number): void {
    const usuario = this.auth.usuario();

    if (!usuario) {
      return;
    }

    this.salvar(usuario.email, this.ids().filter(id => id !== livroId));
  }

  private salvar(email: string, ids: number[]): void {
    const atualizado = { ...this.livrarias(), [email]: ids };

    this.livrarias.set(atualizado);

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(atualizado));
    } catch {
      // Armazenamento indisponível (modo privado, cota cheia...): segue só em memória
    }
  }

  private carregar(): LivrariasPorUsuario {
    try {
      const salvo = localStorage.getItem(this.STORAGE_KEY);
      const dados: unknown = salvo ? JSON.parse(salvo) : {};

      return dados && typeof dados === 'object' && !Array.isArray(dados)
        ? (dados as LivrariasPorUsuario)
        : {};
    } catch {
      return {};
    }
  }

}