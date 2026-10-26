import { Injectable } from '@angular/core';

import { Autor } from '../models/autor';

// As fotos ficam em public/autores/<id>.jpg
const autor = (id: string, nome: string, biografia: string[]): Autor => ({
  id,
  nome,
  fotoUrl: `autores/${id}.jpg`,
  nota: 4, // valor provisório, igual à avaliação fixa da página do livro
  biografia,
});

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private readonly autores: readonly Autor[] = [
    autor('jk-rowling', 'J.K. Rowling', [
      'J.K. Rowling é uma escritora britânica, conhecida principalmente por ter criado a série Harry Potter, uma das franquias literárias mais bem-sucedidas da história. Ela nasceu em 31 de julho de 1965, na Inglaterra, e publicou o primeiro livro da série, Harry Potter e a Pedra Filosofal, em 1997.',
      'Antes de alcançar o sucesso, Rowling enfrentou dificuldades financeiras e criou grande parte da história enquanto escrevia em cafés. O enorme êxito dos livros levou à adaptação para uma série de filmes de sucesso, além de peças de teatro, jogos e parques temáticos inspirados no universo mágico.',
      'Além de Harry Potter, Rowling escreveu outros livros, como a série policial publicada sob o pseudônimo Robert Galbraith e obras voltadas para o público infantil e adulto.',
      'Ao longo da carreira, recebeu diversos prêmios literários e tornou-se uma das autoras mais vendidas do mundo. Nos últimos anos, também passou a ser amplamente conhecida por declarações sobre questões de gênero, que geraram debates e opiniões divergentes em diferentes partes da sociedade. Apesar dessas controvérsias, sua contribuição para a literatura infantojuvenil continua sendo considerada muito influente.',
    ]),
    autor('jrr-tolkien', 'J.R.R. Tolkien', [
      'John Ronald Reuel Tolkien foi um escritor, poeta e filólogo britânico, nascido em 3 de janeiro de 1892, em Bloemfontein, na África do Sul. Mudou-se ainda criança para a Inglaterra e, mais tarde, tornou-se professor da Universidade de Oxford, onde estudou línguas antigas e literatura medieval.',
      'É o criador da Terra-média, cenário de O Hobbit (1937) e de O Senhor dos Anéis (1954–1955). Sua paixão por idiomas deu origem a línguas inventadas, como o élfico, que sustentam a profundidade do seu universo. Faleceu em 1973, deixando textos que foram publicados postumamente, como O Silmarillion.',
    ]),
    autor('jenny-han', 'Jenny Han', [
      'Jenny Han é uma escritora norte-americana de ascendência coreana, conhecida por seus romances para jovens adultos. Antes de se dedicar à ficção, trabalhou com livros infantis e juvenis.',
      'Seu maior sucesso é a trilogia Para Todos os Garotos Que Já Amei, adaptada para o cinema pela Netflix. Também é autora da série O Verão em que Fiquei Bonita, que ganhou adaptação para a TV.',
    ]),
    autor('brandon-sanderson', 'Brandon Sanderson', [
      'Brandon Sanderson é um escritor norte-americano de fantasia, nascido em 19 de dezembro de 1975, em Lincoln, Nebraska. Ficou conhecido ao ser escolhido para concluir a série A Roda do Tempo, após a morte de Robert Jordan.',
      'É o criador do Cosmere, um universo compartilhado que conecta várias de suas obras, como a trilogia Mistborn e O Arquivo das Tempestades. Seus livros são conhecidos pelos sistemas de magia detalhados e coerentes, e ele também é professor de escrita criativa.',
    ]),
    autor('suzanne-collins', 'Suzanne Collins', [
      'Suzanne Collins é uma escritora e roteirista norte-americana, nascida em 10 de agosto de 1962, em Hartford, Connecticut. Antes de escrever livros, trabalhou por muitos anos em programas de televisão infantis.',
      'Alcançou fama mundial com a trilogia Jogos Vorazes, publicada a partir de 2008, que virou uma série de filmes de grande sucesso. Antes disso, escreveu a série infantojuvenil As Crônicas da Subterra.',
    ]),
    autor('kiera-cass', 'Kiera Cass', [
      'Kiera Cass é uma escritora norte-americana de romances para jovens adultos, nascida na Carolina do Sul. Começou a escrever ainda jovem e publicou seus primeiros livros de forma independente.',
      'Tornou-se best-seller com a série A Seleção, que mistura romance, distopia e realeza. Também é autora de A Sereia e de livros que expandem o universo de Illéa.',
    ]),
    autor('arthur-conan-doyle', 'Arthur Conan Doyle', [
      'Sir Arthur Conan Doyle foi um médico e escritor escocês, nascido em 22 de maio de 1859, em Edimburgo. Exerceu a medicina antes de se dedicar à literatura em tempo integral.',
      'Criou o detetive Sherlock Holmes, que estreou em Um Estudo em Vermelho (1887) e se tornou um dos personagens mais famosos da ficção. Escreveu também aventuras e ficção científica, como O Mundo Perdido, e faleceu em 1930.',
    ]),
    autor('cs-lewis', 'C.S. Lewis', [
      'Clive Staples Lewis foi um escritor e professor irlandês, nascido em 29 de novembro de 1898, em Belfast. Lecionou literatura medieval nas universidades de Oxford e Cambridge e foi amigo próximo de J.R.R. Tolkien.',
      'É o autor de As Crônicas de Nárnia, série de sete livros publicada entre 1950 e 1956. Também escreveu obras sobre fé e filosofia, como Cristianismo Puro e Simples e Cartas de um Diabo a seu Aprendiz. Faleceu em 1963.',
    ]),
    autor('rick-riordan', 'Rick Riordan', [
      'Rick Riordan é um escritor norte-americano, nascido em 5 de junho de 1964, em San Antonio, Texas. Foi professor de inglês e história por muitos anos e escreveu romances policiais para adultos antes de passar para a literatura infantojuvenil.',
      'Criou Percy Jackson inicialmente como histórias contadas ao filho na hora de dormir. A série mistura mitologia grega e aventura moderna e levou a novas séries, como Os Heróis do Olimpo e As Crônicas dos Kane.',
    ]),
    autor('stephenie-meyer', 'Stephenie Meyer', [
      'Stephenie Meyer é uma escritora norte-americana, nascida em 24 de dezembro de 1973, em Hartford, Connecticut. Segundo ela, a história de Crepúsculo surgiu de um sonho, em 2003.',
      'A série Crepúsculo vendeu milhões de exemplares no mundo todo e rendeu uma franquia de filmes. Ela também escreveu o romance de ficção científica A Hospedeira.',
    ]),
    autor('stephanie-perkins', 'Stephanie Perkins', [
      'Stephanie Perkins é uma escritora norte-americana de romances para jovens adultos. Antes de publicar seus livros, trabalhou em livrarias e bibliotecas.',
      'Ficou conhecida pela série de romances formada por Anna e o Beijo Francês, Lola e o Garoto da Casa ao Lado e Isla e o Final Feliz. Também escreveu o suspense Há Alguém em Sua Casa.',
    ]),
    autor('jojo-moyes', 'Jojo Moyes', [
      'Jojo Moyes é uma escritora britânica, nascida em 4 de agosto de 1969, em Londres. Trabalhou por cerca de dez anos como jornalista no jornal The Independent antes de se dedicar aos romances.',
      'Seu maior sucesso é Como Eu Era Antes de Você (2012), que ganhou sequências e uma adaptação para o cinema. Seus romances são conhecidos por tratar de relações e escolhas difíceis.',
    ]),
    autor('veronica-roth', 'Veronica Roth', [
      'Veronica Roth é uma escritora norte-americana, nascida em 19 de agosto de 1988, em Nova York. Escreveu o primeiro livro de Divergente ainda na faculdade e o publicou em 2011, aos 22 anos.',
      'A trilogia Divergente foi um sucesso mundial e virou filme. Depois dela, a autora também escreveu a duologia de fantasia científica Carve the Mark.',
    ]),
    autor('james-dashner', 'James Dashner', [
      'James Dashner é um escritor norte-americano de ficção científica e fantasia para jovens. Antes de se dedicar à literatura, trabalhou como contador.',
      'Ficou famoso com a série Maze Runner, iniciada em 2009 com Correr ou Morrer, que ganhou adaptação para o cinema. Também escreveu a série A Décima Terceira Realidade e outros livros de aventura.',
    ]),
    autor('frank-herbert', 'Frank Herbert', [
      'Frank Herbert foi um escritor norte-americano, nascido em 8 de outubro de 1920, em Tacoma, Washington. Trabalhou como jornalista antes de se tornar escritor em tempo integral.',
      'Seu romance mais famoso, Duna (1965), é considerado um dos maiores clássicos da ficção científica e venceu os prêmios Hugo e Nebula. Ele continuou a saga em várias sequências até falecer, em 1986.',
    ]),
    autor('isaac-asimov', 'Isaac Asimov', [
      'Isaac Asimov foi um escritor e bioquímico nascido na Rússia, em 1920, que cresceu nos Estados Unidos. Foi professor de bioquímica na Universidade de Boston e escreveu mais de 500 livros, entre ficção e divulgação científica.',
      'É autor da série Fundação e de Eu, Robô, onde apresentou as Três Leis da Robótica, ideias que influenciaram a ficção científica e o debate sobre inteligência artificial. Faleceu em 1992.',
    ]),
    autor('sophie-hannah', 'Sophie Hannah', [
      'Sophie Hannah é uma escritora e poeta britânica, nascida em Manchester. Publicou poesia premiada e romances de suspense psicológico.',
      'Com a autorização da família de Agatha Christie, escreveu novos romances do detetive Hercule Poirot, a partir de Os Crimes do Monograma (2014). Os Assassinatos de Kingfisher Hill é um deles.',
    ]),
    autor('agatha-christie', 'Agatha Christie', [
      'Agatha Christie foi uma escritora britânica, nascida em 15 de setembro de 1890, em Torquay, Inglaterra. É conhecida como a "Rainha do Crime" e figura entre os autores mais vendidos da história.',
      'Criou os detetives Hercule Poirot e Miss Marple e escreveu clássicos como Assassinato no Expresso do Oriente e Morte no Nilo. Sua peça A Ratoeira ficou em cartaz em Londres por décadas. Faleceu em 1976.',
    ]),
    autor('dan-brown', 'Dan Brown', [
      'Dan Brown é um escritor norte-americano, nascido em 22 de junho de 1964, em Exeter, New Hampshire. Foi professor de inglês antes de se dedicar à escrita de thrillers.',
      'Criou o simbologista Robert Langdon, protagonista de Anjos e Demônios, O Código Da Vinci e O Símbolo Perdido. O Código Da Vinci (2003) tornou-se um fenômeno mundial de vendas e foi adaptado para o cinema.',
    ]),
    autor('maurice-leblanc', 'Maurice Leblanc', [
      'Maurice Leblanc foi um escritor francês, nascido em 11 de novembro de 1864, em Rouen. Escreveu romances e contos antes de alcançar fama com o personagem que o marcou.',
      'Em 1905 criou Arsène Lupin, o "ladrão cavalheiro", figura que muitas vezes é comparada a Sherlock Holmes. Escreveu dezenas de histórias sobre o personagem até falecer, em 1941.',
    ]),
    autor('stieg-larsson', 'Stieg Larsson', [
      'Stieg Larsson foi um jornalista e escritor sueco, nascido em 15 de agosto de 1954. Dedicou grande parte da vida ao jornalismo investigativo e à luta contra o extremismo, e foi um dos fundadores da revista Expo.',
      'Escreveu a trilogia Millennium, publicada somente após sua morte, em 2004. Os livros se tornaram um fenômeno mundial e deram origem a adaptações para o cinema e a TV.',
    ]),
  ];

  buscarPorId(id: string): Autor | undefined {
    return this.autores.find(autor => autor.id === id);
  }

  buscarPorNome(nome: string | undefined): Autor | undefined {
    return nome ? this.autores.find(autor => autor.nome === nome) : undefined;
  }

  listar(): readonly Autor[] {
    return this.autores;
  }

}