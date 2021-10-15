import { TestBed } from '@angular/core/testing';

import { JogoTabuleiroService } from './jogo-tabuleiro.service';

describe('JogoTabuleiroService', () => {
  let service: JogoTabuleiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogoTabuleiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
