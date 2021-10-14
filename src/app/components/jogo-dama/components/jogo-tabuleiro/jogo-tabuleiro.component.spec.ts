import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoTabuleiroComponent } from './jogo-tabuleiro.component';

describe('JogoTabuleiroComponent', () => {
  let component: JogoTabuleiroComponent;
  let fixture: ComponentFixture<JogoTabuleiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoTabuleiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoTabuleiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
