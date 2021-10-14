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

  constructor() { }

  ngOnInit(): void {

  }



  capturaItem(peca: Peca){
    this.selecionarItemEvento.emit(peca);
  }
}
