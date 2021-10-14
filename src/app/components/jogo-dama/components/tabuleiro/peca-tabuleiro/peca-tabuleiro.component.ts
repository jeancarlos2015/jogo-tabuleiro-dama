import { environment } from './../../../../../../environments/environment.prod';
import { Tabuleiro, Peca } from './../../models/model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-peca-tabuleiro',
  templateUrl: './peca-tabuleiro.component.html',
  styleUrls: ['./peca-tabuleiro.component.scss']
})
export class PecaTabuleiroComponent implements OnInit {

  @Input() tabuleiro = new Tabuleiro();
  @Input() linha = 1;
  @Input() coluna = 1;
  @Output() selecionarItemEvento = new EventEmitter<Peca>();
  @Output() moverItemEvento = new EventEmitter<Peca>();

  constructor() { }

  ngOnInit(): void {

  }



  capturaItem(peca: Peca) {
    if (environment.production) return;
    this.selecionarItemEvento.emit(peca);
  }

  moverItem(peca: Peca) {
    if (environment.production) return;
    this.moverItemEvento.emit(peca);
  }
}
