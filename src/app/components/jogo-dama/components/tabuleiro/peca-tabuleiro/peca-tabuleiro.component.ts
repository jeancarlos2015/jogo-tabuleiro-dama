import { environment } from './../../../../../../environments/environment';
import { Tabuleiro, Peca, Casa } from './../../models/model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-peca-tabuleiro',
  templateUrl: './peca-tabuleiro.component.html',
  styleUrls: ['./peca-tabuleiro.component.scss']
})
export class PecaTabuleiroComponent implements OnInit {

  @Input() tabuleiro = new Tabuleiro();
  @Input() linha = 1;
  @Input() coluna = 1;
  @Output() selecionarItemEvento = new EventEmitter<Casa>();
  @Output() moverItemEvento = new EventEmitter<Casa>();

  constructor() { }

  ngOnInit(): void {

  }



  capturaItem(casa: Casa) {

    this.selecionarItemEvento.emit(casa);
  }

  moverItem(casa: Casa) {

    this.moverItemEvento.emit(casa);
  }
}
