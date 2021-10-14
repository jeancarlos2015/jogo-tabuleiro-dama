import { Component, OnInit } from '@angular/core';
import { Casa, Diagonal, Peca, Tabuleiro } from '../models/model';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent implements OnInit {
  tabuleiro: Tabuleiro = new Tabuleiro();
  casaSelecionada: Casa = null;
  COR_BRANCA = '';
  COR_PRETA = '';
  vetor_diagonal_secundaria = [49, 49, 0];
  linhas = [1, 2, 3, 4, 5, 6, 7, 8];
  colunas = [1, 2, 3, 4, 5, 6, 7, 8];
  digonais: Diagonal[] = [];
  constructor() { }

  ngOnInit(): void {
    this.inicializaTabuleiro();
    this.desenhaTabuleiro();
    this.preencherPecasJogadores();
    this.indexandoPecas();
    this.inicializaDiagonais();
  }
  inicializaDiagonais() {

    const diagonalPrincipal1 = new Diagonal(new Casa(null, false, 1, 8), new Casa(null, false, 8, 1));
    const diagonalSecundaria1 = new Diagonal(new Casa(null, false, 1, 1), new Casa(null, false, 8, 8));
    this.digonais.push(diagonalPrincipal1);
    this.digonais.push(diagonalSecundaria1);
  }
  ePositivo(n: number): boolean {
    return Math.pow(-1, n) == 1;
  }

  inicializaTabuleiro() {
    this.tabuleiro.casas = [];
    for (let linha = 1; linha < 9; linha++) {
      this.tabuleiro.casas[linha] = [];
      for (let coluna = 1; coluna < 9; coluna++) {
        this.tabuleiro.casas[linha][coluna] = new Casa();
        this.tabuleiro.casas[linha][coluna].linha = linha;
        this.tabuleiro.casas[linha][coluna].coluna = coluna;
      }
    }
  }
  desenhaTabuleiro() {
    for (let linha = 1; linha < 9; linha++) {

      if (!this.ePositivo(linha)) {
        for (let coluna = 1; coluna < 9; coluna++) {
          this.tabuleiro.casas[linha][coluna].ePreto = this.ePositivo(coluna);
        }
      }

      if (this.ePositivo(linha)) {
        for (let coluna = 1; coluna < 9; coluna++) {
          this.tabuleiro.casas[linha][coluna].ePreto = !this.ePositivo(coluna);
        }
      }

    }
  }
  preencherPecasJogadores() {
    for (let linha = 1; linha < 4; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        if (this.tabuleiro.casas[linha][coluna].ePreto) {
          this.tabuleiro.casas[linha][coluna].peca = new Peca(2);
        }
      }
    }
    for (let linha = 6; linha < 9; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        if (this.tabuleiro.casas[linha][coluna].ePreto) {
          this.tabuleiro.casas[linha][coluna].peca = new Peca(3);
        }
      }
    }
  }

  indexandoPecas() {
    for (let linha = 1; linha < 9; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        if (this.tabuleiro.casas[linha][coluna].peca) {
          this.tabuleiro.casas[linha][coluna].peca.id = '' + linha + '' + coluna;
        }

      }
    }
  }

  capturaItem(casa: Casa) {
    if (casa.peca == null) return;
    casa.selecionado = !casa.selecionado;
    this.casaSelecionada = casa;
  }
  obterVetor(origem: Casa, destino: Casa) {
    let vetor = [];
    const v1 = Math.pow(destino.coluna - origem.coluna, 2);
    const v2 = Math.pow(destino.linha - origem.linha, 2);
    vetor.push(v1); // x
    vetor.push(v2); // y
    vetor.push(0); // z
    return vetor;
  }
  calcDeterminante(vetor1 = [], vetor2 = []) {
    const a1 = vetor1[0];
    const b1 = vetor2[0];
    const a2 = vetor1[1];
    const b2 = vetor2[1];
    const a3 = vetor1[2];
    const b3 = vetor2[2];

    const v1 = a2 * b3 - a3 * b2;
    const v2 = a3 * b1 - a1 * b3;
    const v3 = a1 * b2 - a2 * b1;
    return v1 + v2 + v3;
  }
  calcDistanciaEntrePontos(origem: Casa, destino: Casa): Number {
    const origemX = origem.coluna;
    const origemY = origem.linha;
    const destinoX = destino.coluna;
    const destinoY = destino.linha;
    const result = Math.sqrt(Math.pow(destinoX - origemX, 2) + Math.pow(destinoY - origemY, 2));
    return Math.trunc(result);
  }
  Ediagonal(origem: Casa, destino: Casa) {
    const vet1 = this.obterVetor(origem, destino);
    return this.calcDeterminante(vet1, this.vetor_diagonal_secundaria) == 0 && this.calcDistanciaEntrePontos(origem, destino) == 1;
  }
  moverPeca(destino: Casa) {
    if (destino.peca) return;
    if (this.Ediagonal(this.casaSelecionada, destino)) {
      destino.peca = Object.assign({}, this.casaSelecionada.peca);
      this.casaSelecionada.peca = null;
    }

  }
}
