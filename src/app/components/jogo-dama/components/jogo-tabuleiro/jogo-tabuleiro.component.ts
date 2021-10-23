import { JogoTabuleiroService } from './jogo-tabuleiro.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MegaMenuItem, MessageService } from 'primeng/api';
import { Adversario, Desafiante, Jogador, Jogo, Peca, Tabuleiro } from '../models/model';
import { Subscription } from 'rxjs';
import { ExibeMensagensService } from './exibe-mensagens.service';

@Component({
  selector: 'app-jogo-tabuleiro',
  templateUrl: './jogo-tabuleiro.component.html',
  styleUrls: ['./jogo-tabuleiro.component.scss']
})
export class JogoTabuleiroComponent implements OnInit, OnDestroy {

  pecasJogador2Capturadas: Peca[] = [];
  pecasJogador1Capturadas: Peca[] = [];
  jogador: Jogador = new Desafiante('Jean');
  desafianteJogador: Jogador = new Desafiante('Jean');
  adversarioJogador: Jogador = new Adversario('João');
  desafiante: Desafiante = new Desafiante('Jean');
  adversario: Adversario = new Adversario('João');
  qtPecasCapturadasJogador1 = 0;
  qtPecasCapturadasJogador2 = 0;
  pecaAtualJogador1: Peca = null;
  pecaAtualJogador2: Peca = null;
  subscriptions: Subscription[] = [];
  flagRotacionarFrente = true;
  flagRotacionarTras = false;
  items: MegaMenuItem[];
  flagRotacao = false;
  tabuleiro: Tabuleiro = new Tabuleiro();
  constructor(
    protected mensagemService: ExibeMensagensService,
    protected servico: JogoTabuleiroService
  ) { }
  rotacionar() {
    if (!this.flagRotacao) return;
    this.flagRotacionarFrente = !this.flagRotacionarFrente;
    this.flagRotacionarTras = !this.flagRotacionarTras;
    if (this.jogador.nick == this.adversarioJogador.nick) {
      const jogador = Object.assign({}, this.adversarioJogador);
      this.adversarioJogador = Object.assign({}, this.desafianteJogador);
      this.desafianteJogador = Object.assign({}, jogador);
    }
    if (this.jogador.nick == this.desafianteJogador.nick) {
      const jogador = Object.assign({}, this.desafianteJogador);
      this.desafianteJogador = Object.assign({}, this.adversarioJogador);
      this.adversarioJogador = Object.assign({}, jogador);
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => { if (sub) sub.unsubscribe() });
  }

  ngOnInit(): void {

    this.capturaPecasAdversario1();
    this.capturaPecasAdversario2();
    this.capturaPecaAtualAdversario2();
    this.capturaPecaAtualAdversario1();
    this.capturaDadosJogador();
    this.capturaProximaJogada();
    this.capturaTabuleiro();
    this.inicializaMenu();
  }
  ePositivo(n: number): boolean {
    return Math.pow(-1, n) == 1;
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
  capturaTabuleiro() {
    let instancia = this.servico.sendTabuleiro.subscribe(
      (tabuleiro) => {
        this.tabuleiro = tabuleiro;
      }
    )
    this.subscriptions.push(instancia);
  }
  capturaDadosJogador() {
    let instancia = this.servico.notificaJogadorJogada.subscribe(
      (jogador) => {

        if (jogador.tipo == 'desafiante') {
          this.desafianteJogador = Object.assign({}, this.jogador);
        }
        if (jogador.tipo == 'adversario') {
          this.adversarioJogador = Object.assign({}, this.jogador);
        }
      }
    )
    this.subscriptions.push(instancia);
  }
  capturaProximaJogada() {
    let instancia = this.servico.proximaJogada.subscribe(
      (jogador) => {
        this.jogador = jogador;
        this.rotacionar();
      }
    )
    this.subscriptions.push(instancia);
  }
  capturaPecasAdversario1() {
    let instancia = this.servico.pecasJogador1CapturadasEvento.subscribe(
      (pecas) => {
        this.pecasJogador1Capturadas = this.pecasJogador1Capturadas.concat(pecas);
        this.qtPecasCapturadasJogador1 = this.pecasJogador1Capturadas.length;
      }
    )
    this.subscriptions.push(instancia);
  }
  capturaPecasAdversario2() {
    let instancia = this.servico.pecasJogador2CapturadasEvento.subscribe(
      (pecas) => {
        this.pecasJogador2Capturadas = this.pecasJogador2Capturadas.concat(pecas);
        this.qtPecasCapturadasJogador2 = this.pecasJogador2Capturadas.length;
      }
    )
    this.subscriptions.push(instancia);
  }

  capturaPecaAtualAdversario2() {
    let instancia = this.servico.pecaAtualJogador2Evento.subscribe(
      (peca) => {
        this.pecaAtualJogador2 = peca;
      }
    )
    this.subscriptions.push(instancia);
  }
  capturaPecaAtualAdversario1() {
    let instancia = this.servico.pecaAtualJogador1Evento.subscribe(
      (peca) => {
        this.pecaAtualJogador1 = peca;

      }
    )
    this.subscriptions.push(instancia);
  }
  indexandoPecas() {
    for (let linha = 1; linha < 9; linha++) {
      for (let coluna = 1; coluna < 9; coluna++) {
        if (this.tabuleiro.casas[linha][coluna].peca) {
          this.tabuleiro.casas[linha][coluna].id = '' + linha + '' + coluna;
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
  novoJogo() {
    this.tabuleiro = new Tabuleiro();
    this.desenhaTabuleiro();
    this.preencherPecasJogadores();
    this.indexandoPecas();
    this.jogador = new Desafiante('Jean');
    this.desafianteJogador = new Desafiante('Jean');
    this.adversarioJogador = new Adversario('João');
  }
  inicializaMenu() {
    this.items = [
      {
        label: 'Ferramentas', icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: 'Jogo',
              items: [
                {
                  label: 'Finalizar Jogo',
                  command: () => {
                    this.mensagemService.mostrarMensagemAtencao(true, 'Em desenvolvimento');
                  }
                },
                {
                  label: 'Novo Jogo',
                  command: () => {
                    this.novoJogo();
                    this.servico.removerJogo();
                    this.inicializaMenu();
                  }
                },
                {
                  label: 'Salvar Jogo',
                  command: () => {

                    this.servico.salvarJogo(new Jogo(this.desafianteJogador, this.adversarioJogador, this.jogador, this.tabuleiro));

                    this.inicializaMenu();
                  }
                },
                {
                  label: 'Ultimo Jogo Salvo',
                  command: () => {
                    if (this.servico.existeJogoSalvo) {

                      const jogo = this.servico.recuperarJogo();
                      this.desafianteJogador = jogo.desafiante;
                      this.adversarioJogador = jogo.adversario;
                      this.tabuleiro = jogo.tabuleiro;
                      this.jogador = jogo.jogador;


                      this.inicializaMenu();
                    }
                  },
                },
                {
                  label: !this.flagRotacao ? 'Habilitar Rotação' : 'Desabilitar Rotação',
                  command: () => {
                    this.flagRotacao = !this.flagRotacao;
                    this.inicializaMenu();
                  }
                }
              ]
            },

          ],

        ]
      }
    ];
  }
}
