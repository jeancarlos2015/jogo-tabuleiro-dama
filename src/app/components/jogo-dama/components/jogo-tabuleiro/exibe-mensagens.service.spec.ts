import { TestBed } from '@angular/core/testing';

import { ExibeMensagensService } from './exibe-mensagens.service';

describe('ExibeMensagensService', () => {
  let service: ExibeMensagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExibeMensagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
