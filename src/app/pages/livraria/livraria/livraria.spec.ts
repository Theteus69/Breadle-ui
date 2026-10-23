import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livraria } from './livraria';

describe('Livraria', () => {
  let component: Livraria;
  let fixture: ComponentFixture<Livraria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livraria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livraria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
