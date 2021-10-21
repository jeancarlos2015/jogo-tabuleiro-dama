import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDamaComponent } from './jogo-dama.component';

describe('JogoDamaComponent', () => {
  let component: JogoDamaComponent;
  let fixture: ComponentFixture<JogoDamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoDamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
