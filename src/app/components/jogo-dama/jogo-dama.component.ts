import { ExibeMensagensService } from './components/jogo-tabuleiro/exibe-mensagens.service';
import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-jogo-dama',
  templateUrl: './jogo-dama.component.html',
  styleUrls: ['./jogo-dama.component.scss']
})
export class JogoDamaComponent implements OnInit {
  items: MegaMenuItem[];
  constructor(private mensagemService: ExibeMensagensService) { }

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
                    this.mensagemService.mostrarMensagemAtencao(true,'Em desenvolvimento');
                  }
                },
                {
                  label: 'Novo Jogo',
                  command: () => {
                    this.mensagemService.mostrarMensagemAtencao(true,'Em desenvolvimento');
                  }
                },
                {
                  label: 'Salvar Jogo',
                  command: () => {
                    this.mensagemService.mostrarMensagemAtencao(true,'Em desenvolvimento');
                  }
                },
                {
                  label: 'Voltar',
                  command: () => {
                    this.mensagemService.mostrarMensagemAtencao(true,'Em desenvolvimento');
                  }
                },
                {
                  label: 'Avançar',
                  command: () => {
                    this.mensagemService.mostrarMensagemAtencao(true,'Em desenvolvimento');
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
