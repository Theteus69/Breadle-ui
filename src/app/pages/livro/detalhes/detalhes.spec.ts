import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { Detalhes } from './detalhes';

describe('Detalhes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'livro/detalhes/:id', component: Detalhes }]),
      ],
    });
  });

  it('should show the book matching the route id', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/livro/detalhes/2', Detalhes);

    const titulo = harness.routeNativeElement?.querySelector('h1');
    expect(titulo?.textContent).toContain('Câmara Secreta');
  });

  it('should navigate to the collection of the book when clicking "Ver coleção"', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/livro/detalhes/8', Detalhes);

    const botao = Array.from(
      harness.routeNativeElement?.querySelectorAll('.acoes-livro button') ?? []
    ).find(b => b.textContent?.includes('Ver coleção')) as HTMLButtonElement;

    botao.click();
    await harness.fixture.whenStable();

    expect(TestBed.inject(Router).url).toBe('/colecoes/2');
  });

  it('should show a message when the book does not exist', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/livro/detalhes/999', Detalhes);

    expect(harness.routeNativeElement?.textContent).toContain('Livro não encontrado');
  });
});