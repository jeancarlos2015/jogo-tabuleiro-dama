import { ExibeMensagensService } from './../exibe-mensagens.service';
import { Component, Input, OnInit } from '@angular/core';
import { Adversario, Casa, Desafiante, Diagonal, Jogador, Peca, Tabuleiro } from '../../models/model';
import { JogoTabuleiroService } from './../jogo-tabuleiro.service';
import { JogoTabuleiroComponent } from '../jogo-tabuleiro.component';


@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent extends JogoTabuleiroComponent {
  @Input() tabuleiro: Tabuleiro;
  casaSelecionada: Casa = null;
  COR_BRANCA = '';
  COR_PRETA = '';
  vetor_diagonal = [49, 49, 0];
  linhas = [1, 2, 3, 4, 5, 6, 7, 8];
  colunas = [1, 2, 3, 4, 5, 6, 7, 8];
  digonais: Diagonal[] = [];
  ciclo = 1;
  pecasJogador2Capturadas: Peca[] = [];
  pecasJogador1Capturadas: Peca[] = [];
  @Input() jogador: Jogador = null;
  @Input() desafiante: Jogador = null;
  @Input() adversario: Jogador = null;
  bloquearJogadaParaCaptura: boolean;



  ngOnInit(): void {
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







  selecionarCasa(casa: Casa) {
    if (casa.peca == null) return;
    if (casa.peca) {
      this.mensagemService.mostrarMensagemAtencao(casa.peca.valor != this.jogador.valor, 'É a vez do jogador :' + this.jogador.nick);
      casa.selecionado = casa.peca.valor == this.jogador.valor;

    } else {
      casa.selecionado = !casa.selecionado;
    }
    if (casa.selecionado) {
      this.casaSelecionada = casa;
    }

    if (this.casaSelecionada.peca && this.casaSelecionada.peca.valor == 3) {
      this.servico.pecaAtualJogador2Evento.emit(this.casaSelecionada);
    }
    if (this.casaSelecionada.peca && this.casaSelecionada.peca.valor == 2) {
      this.servico.pecaAtualJogador1Evento.emit(this.casaSelecionada);
    }

    this.tabuleiro.casas.forEach(vetCasas => {
      vetCasas.forEach(casa => {
        if (casa.selecionado) {
          casa.selecionado = casa.id == this.casaSelecionada.id;
        }
      })
    })
  }
  // Obtém o vetor entre dois pontos.
  obterVetor(origem: Casa, destino: Casa) {
    let vetor = [];
    const v1 = Math.pow(destino.coluna - origem.coluna, 2);
    const v2 = Math.pow(destino.linha - origem.linha, 2);
    vetor.push(v1); // x
    vetor.push(v2); // y
    vetor.push(0); // z
    return vetor;
  }
  // Verifica se dois vetores são paralelos.
  eParalelo(vetor1 = [], vetor2 = []) {
    const a1 = vetor1[0];
    const b1 = vetor2[0];
    const a2 = vetor1[1];
    const b2 = vetor2[1];
    const a3 = vetor1[2];
    const b3 = vetor2[2];

    const v1 = a2 * b3 - a3 * b2;
    const v2 = a3 * b1 - a1 * b3;
    const v3 = a1 * b2 - a2 * b1;
    return (v1 + v2 + v3) == 0;
  }

  // Calcula o módulo da distância entre dois pontos.
  calcModuloDistanciaEntrePontos(origem: Casa, destino: Casa): Number {
    const origemX = origem.coluna;
    const origemY = origem.linha;
    const destinoX = destino.coluna;
    const destinoY = destino.linha;
    const result = Math.sqrt(Math.pow(destinoX - origemX, 2) + Math.pow(destinoY - origemY, 2));
    return Math.trunc(result);
  }

  // Calcula a distância entre dois pontos.
  calcDistanciaEntrePontos(origem: Casa, destino: Casa): Number {
    const origemX = origem.coluna;
    const origemY = origem.linha;
    const destinoX = destino.coluna;
    const destinoY = destino.linha;
    const result = (destinoX - origemX) + (destinoY - origemY);
    return Math.trunc(result);
  }
  ediagonal(origem: Casa, destino: Casa) {
    const vet1 = this.obterVetor(origem, destino);
    return this.eParalelo(vet1, this.vetor_diagonal) && this.calcModuloDistanciaEntrePontos(origem, destino) == 1;
  }
  ediagonalCaptura(origem: Casa, destino: Casa) {
    const vet1 = this.obterVetor(origem, destino);
    return this.eParalelo(vet1, this.vetor_diagonal) && this.calcModuloDistanciaEntrePontos(origem, destino) == 2;
  }
  podeCapturar(origem: Casa, destino: Casa) {
    const arrayCasas: Casa[] = [];
    for (let linha = 1; linha < 9; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        const casa = this.tabuleiro.casas[linha][coluna];
        if (this.calcDistanciaEntrePontos(origem, casa) == 1) {
          arrayCasas.push(casa);
        }
      }

    }
    return arrayCasas.filter(c => c.id == destino.id).length > 0 && origem.valor != destino.valor;

  }
  existePecaParaCaptura(origem: Casa, destino: Casa) {
    for (let linha = 1; linha < 9; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        const casa = this.tabuleiro.casas[linha][coluna];
        if (this.calcModuloDistanciaEntrePontos(origem, casa) == 1 && casa.peca) {
          if (this.calcDistanciaEntrePontos(casa, destino) == 1 && casa.peca) {

            return casa.peca.valor != origem.peca.valor;
          }


        }
      }
    }
    return false;
  }
  obterCasa(origem: Casa, destino: Casa) {
    for (let linha = 1; linha < 9; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        const casa = this.tabuleiro.casas[linha][coluna];
        if (this.calcModuloDistanciaEntrePontos(origem, casa) == 1 && this.ediagonal(casa,destino) && casa.peca) {
          console.log('foi');
          if (casa.peca.valor != origem.peca.valor) {
            return casa;
          }
        }
        // if (this.calcModuloDistanciaEntrePontos(origem, casa) == 1 && casa.peca) {



        // }
      }
    }
    return null;
  }
  eJogadorDesafiante() {
    return Math.pow(-1, this.ciclo) < 0;
  }
  mover(destino: Casa) {
    if(this.casaSelecionada == null) return;
    destino.peca = Object.assign({}, this.casaSelecionada.peca);
    this.casaSelecionada.peca = null;
    if (this.casaSelecionada.peca && this.casaSelecionada.peca.valor == 3) {
      this.servico.pecaAtualJogador2Evento.emit(this.casaSelecionada);
    }
    if (this.casaSelecionada.peca && this.casaSelecionada.peca.valor == 2) {
      this.servico.pecaAtualJogador1Evento.emit(this.casaSelecionada);
    }

  }
  moverPecaJogadorAdversario(destino: Casa) {
    if(this.casaSelecionada == null) return;
    if (this.casaSelecionada.peca && this.casaSelecionada.peca.valor == this.adversario.valor) {
      if (this.ediagonal(this.casaSelecionada, destino) || this.ediagonalCaptura(this.casaSelecionada, destino)) {
        this.capturar(destino);
        this.mover(destino);
        this.jogador.jogadas = this.jogador.jogadas + 1;
        this.servico.notificaJogadorJogada.emit(this.jogador);
        this.jogador = Object.assign({}, this.desafiante);
      }

    }
  }
  moverPecaJogadorDesafiante(destino: Casa) {
    if(this.casaSelecionada == null) return;
    if (this.casaSelecionada.peca && this.casaSelecionada.peca.valor == this.desafiante.valor) {
      if (this.ediagonal(this.casaSelecionada, destino) || this.ediagonalCaptura(this.casaSelecionada, destino)) {
        this.capturar(destino);
        this.mover(destino);
        this.jogador.jogadas = this.jogador.jogadas + 1;
        this.servico.notificaJogadorJogada.emit(this.jogador);
        this.jogador = Object.assign({}, this.adversario);
      }
    }
  }
  moverPeca(destino: Casa) {

    if (this.jogador == null) return;
    if (destino == null) return;
    if (destino.peca) return;
    this.moverPecaJogadorAdversario(destino);
    this.moverPecaJogadorDesafiante(destino);
    this.servico.proximaJogada.emit(this.jogador);
    this.servico.sendTabuleiro.emit(this.tabuleiro);

    this.ciclo++;

  }
  informarCaptura(capturado: Casa) {
    if (capturado.peca.valor == 2) {
      this.pecasJogador1Capturadas.push(capturado.peca);
      this.servico.pecasJogador1CapturadasEvento.emit(this.pecasJogador1Capturadas);
    }
    if (capturado.peca.valor == 3) {
      this.pecasJogador2Capturadas.push(capturado.peca);
      this.servico.pecasJogador2CapturadasEvento.emit(this.pecasJogador2Capturadas);
    }
    if (this.casaSelecionada.peca && this.casaSelecionada.peca.valor == 3) {
      this.servico.pecaAtualJogador2Evento.emit(this.casaSelecionada);
    }
    if (this.casaSelecionada.peca && this.casaSelecionada.peca.valor == 2) {
      this.servico.pecaAtualJogador1Evento.emit(this.casaSelecionada);
    }
  }
  capturar(destino: Casa) {

    const capturado = this.obterCasa(this.casaSelecionada, destino);
    console.log('captura ',capturado);
    if (capturado && capturado.peca) {
      // this.informarCaptura(capturado);

      if (capturado.peca && capturado.peca.valor != this.jogador.valor) {
        this.jogador.pontos = this.jogador.pontos + 1;
      }
      capturado.peca = null;
      capturado.selecionado = false;

    }
  }


}
