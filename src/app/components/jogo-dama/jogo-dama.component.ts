import { ExibeMensagensService } from './components/jogo-tabuleiro/exibe-mensagens.service';
import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-jogo-dama',
  templateUrl: './jogo-dama.component.html',
  styleUrls: ['./jogo-dama.component.scss']
})
export class JogoDamaComponent implements OnInit {


  constructor(private mensagemService: ExibeMensagensService) { }

  ngOnInit(): void {

  }


}
