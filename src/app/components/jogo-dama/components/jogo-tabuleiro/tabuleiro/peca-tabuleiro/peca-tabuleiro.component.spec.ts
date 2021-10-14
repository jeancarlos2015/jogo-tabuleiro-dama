import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecaTabuleiroComponent } from './peca-tabuleiro.component';

describe('PecaTabuleiroComponent', () => {
  let component: PecaTabuleiroComponent;
  let fixture: ComponentFixture<PecaTabuleiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecaTabuleiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecaTabuleiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
