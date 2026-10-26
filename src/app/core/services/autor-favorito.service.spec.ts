import { TestBed } from '@angular/core/testing';

import { AutorFavoritoService } from './autor-favorito.service';

describe('AutorFavoritoService', () => {
  let service: AutorFavoritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorFavoritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
