import { Component, OnInit } from '@angular/core';
import { Peca, Tabuleiro } from '../models/model';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent implements OnInit {
  tabuleiro: Tabuleiro = new Tabuleiro();
  pecaSelecionada: Peca = null;
  COR_BRANCA = '';
  COR_PRETA = '';
  linhas = [1, 2, 3, 4, 5, 6, 7, 8];
  colunas = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() { }

  ngOnInit(): void {
    this.inicializaTabuleiro();
    this.desenhaTabuleiro();
    this.preencherPecasJogadores();
    this.indexandoPecas();
  }

  ePositivo(n: number): boolean {
    return Math.pow(-1, n) == 1;
  }

  inicializaTabuleiro() {
    this.tabuleiro.pecas = [];
    for (let linha = 1; linha < 9; linha++) {
      this.tabuleiro.pecas[linha] = [];
      for (let coluna = 1; coluna < 9; coluna++) {
        this.tabuleiro.pecas[linha][coluna] = new Peca();
        this.tabuleiro.pecas[linha][coluna].linha = linha;
        this.tabuleiro.pecas[linha][coluna].coluna = coluna;
      }
    }
  }
  desenhaTabuleiro() {
    for (let linha = 1; linha < 9; linha++) {

      if (!this.ePositivo(linha)) {
        for (let coluna = 1; coluna < 9; coluna++) {
          this.tabuleiro.pecas[linha][coluna].ePreto = this.ePositivo(coluna);
        }
      }

      if (this.ePositivo(linha)) {
        for (let coluna = 1; coluna < 9; coluna++) {
          this.tabuleiro.pecas[linha][coluna].ePreto = !this.ePositivo(coluna);
        }
      }

    }
  }
  preencherPecasJogadores() {
    for (let linha = 1; linha < 4; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        if (this.tabuleiro.pecas[linha][coluna].ePreto) {
          this.tabuleiro.pecas[linha][coluna].valor = 2;
          this.tabuleiro.pecas[linha][coluna].estaVazio = false;

        }

      }
    }
    for (let linha = 6; linha < 9; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        if (this.tabuleiro.pecas[linha][coluna].ePreto) {
          this.tabuleiro.pecas[linha][coluna].valor = 3;
          this.tabuleiro.pecas[linha][coluna].estaVazio = false;
        }
      }
    }
  }

  indexandoPecas() {
    for (let linha = 1; linha < 9; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        this.tabuleiro.pecas[linha][coluna].id = '' + linha + '' + coluna;
      }
    }
  }

  capturaItem(peca: Peca) {
    if (peca.estaVazio) return;
    peca.selecionado = !peca.selecionado;
    this.pecaSelecionada = peca;
    for (let linha = 1; linha < 9; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        if (this.tabuleiro.pecas[linha][coluna].id != peca.id)
          this.tabuleiro.pecas[linha][coluna].selecionado = false;
      }
    }
  }
  getIndex(peca: Peca) {
    let index = -1;
    for (let linha = 1; linha < 9; linha++) {
      index = this.tabuleiro.pecas[linha].indexOf(peca);
    }
    return index;
  }
  getLinha(peca: Peca){

    for (let linha = 1; linha < 9; linha++) {
      const existe = this.tabuleiro.pecas[linha].filter(p => p.id==peca.id).length>0;
      if(existe) return linha;
    }
    return -1;
  }
  moverPeca(destino: Peca) {

    const linhaOrigem = this.pecaSelecionada.linha;
    const colunaOrigem = this.pecaSelecionada.coluna;
    this.tabuleiro.pecas[destino.linha][destino.coluna] = this.pecaSelecionada;
    this.tabuleiro.pecas[linhaOrigem][colunaOrigem] = destino;
  }
}
