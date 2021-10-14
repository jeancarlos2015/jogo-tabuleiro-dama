import { Component, OnInit } from '@angular/core';
import { Diagonal, Peca, Tabuleiro } from '../models/model';

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

    const diagonalPrincipal1 = new Diagonal(new Peca(false, 1, 8), new Peca(false, 8, 1));
    const diagonalSecundaria1 = new Diagonal(new Peca(false, 1, 1), new Peca(false, 8, 8));
    this.digonais.push(diagonalPrincipal1);
    this.digonais.push(diagonalSecundaria1);
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
  obterVetor(origem: Peca, destino: Peca) {
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
  Ediagonal(origem: Peca, destino: Peca) {
    const vet1 = this.obterVetor(origem,destino);

    return this.calcDeterminante(vet1,this.vetor_diagonal_secundaria) == 0;
  }
  moverPeca(destino: Peca) {

    if (this.Ediagonal(this.pecaSelecionada, destino)) {
      const linhaOrigem = this.pecaSelecionada.linha;
      const colunaOrigem = this.pecaSelecionada.coluna;
      this.tabuleiro.pecas[destino.linha][destino.coluna] = this.pecaSelecionada;
      this.tabuleiro.pecas[linhaOrigem][colunaOrigem] = destino;
    }

  }
}
