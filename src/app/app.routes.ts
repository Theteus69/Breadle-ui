import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Livros } from './pages/livro/livros/livros';
import { Detalhes } from './pages/livro/detalhes/detalhes';
import { Colecoes } from './pages/colecao/colecoes/colecoes';
import { DetalhesColecao } from './pages/colecao/detalhes-colecao/detalhes-colecao';
import { Turmas } from './pages/turmas/turmas';
import { Metas } from './pages/metas/metas';
import { Chat } from './pages/chat/chat';
import { Notificacoes } from './pages/notificacoes/notificacoes';
import { Atividades } from './pages/atividades/atividades';
import { Cadastro } from './pages/auth/cadastro/cadastro';
import { Login } from './pages/auth/login/login';
import { Livraria } from './pages/livraria/livraria/livraria';
import { DetalhesAutor } from './pages/autor/detalhes-autor/detalhes-autor/detalhes-autor';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'livros', component: Livros },
  { path: 'livro/detalhes/:id', component: Detalhes },
  { path: 'livro/detalhes', redirectTo: 'livros', pathMatch: 'full' },
  { path: 'colecoes', component: Colecoes },
  { path: 'colecoes/:id', component: DetalhesColecao },
  { path: 'turmas', component: Turmas },
  { path: 'metas', component: Metas },
  { path: 'chat', component: Chat},
  { path: 'atividades', component: Atividades},
  { path: "notificacoes", component: Notificacoes},
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'livraria', component: Livraria },
  { path: 'autor/:id', component: DetalhesAutor },
  { path: '**', redirectTo: '' },
  
];