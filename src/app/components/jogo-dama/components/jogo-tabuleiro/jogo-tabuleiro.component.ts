import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MessageService } from 'primeng/api';
import { Peca } from '../models/model';

@Component({
  selector: 'app-jogo-tabuleiro',
  templateUrl: './jogo-tabuleiro.component.html',
  styleUrls: ['./jogo-tabuleiro.component.scss']
})
export class JogoTabuleiroComponent implements OnInit {
  items: MegaMenuItem[];
  pecasJogador2Capturadas: Peca[] = [];
  pecasJogador1Capturadas: Peca[] = [];
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.inicializaMenu();
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
                    this.mostrarMensagemAtencao('Em desenvolvimento');
                  }
                },
                {
                  label: 'Novo Jogo',
                  command: () => {
                    this.mostrarMensagemAtencao('Em desenvolvimento');
                  }
                },
                {
                  label: 'Salvar Jogo',
                  command: () => {
                    this.mostrarMensagemAtencao('Em desenvolvimento');
                  }
                },
                {
                  label: 'Voltar',
                  command: () => {
                    this.mostrarMensagemAtencao('Em desenvolvimento');
                  }
                },
                {
                  label: 'Avançar',
                  command: () => {
                    this.mostrarMensagemAtencao('Em desenvolvimento');
                  }
                }
              ]
            },

          ],

        ]
      }
    ];
  }

  mostrarMensagem(detail, summary, serverity) {
    this.messageService.add({ severity: serverity, summary: summary, detail: detail });
  }
  mostrarMensagemSucesso(mensagem: string) {
    this.mostrarMensagem(mensagem, 'Sucesso', 'success');
  }

  mostrarMensagemAtencao(mensagem: string) {
    this.mostrarMensagem(mensagem, 'Atenção', 'warn');
  }

  mostrarMensagemErro(mensagem: string) {
    this.mostrarMensagem(mensagem, 'Erro', 'error');
  }
  capturaPecasAdversario1(pecas) {
    console.log(pecas);
    this.pecasJogador1Capturadas = pecas;
  }
  capturaPecasAdversario2(pecas) {
    console.log(pecas);
    this.pecasJogador2Capturadas = pecas;
  }
}
