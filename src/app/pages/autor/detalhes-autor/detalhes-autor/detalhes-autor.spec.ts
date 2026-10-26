import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAutor } from './detalhes-autor';

describe('DetalhesAutor', () => {
  let component: DetalhesAutor;
  let fixture: ComponentFixture<DetalhesAutor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesAutor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesAutor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
