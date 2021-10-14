import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, PrimeNGConfig, MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MegaMenuItem[];
  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
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

  mostrarMensagem(detail,summary,serverity) {
    this.messageService.add({ severity: serverity, summary: summary, detail: detail});
  }
  mostrarMensagemSucesso(mensagem:string){
    this.mostrarMensagem(mensagem,'Sucesso','success');
  }

  mostrarMensagemAtencao(mensagem:string){
    this.mostrarMensagem(mensagem,'Atenção','warn');
  }

  mostrarMensagemErro(mensagem:string){
    this.mostrarMensagem(mensagem,'Erro','error');
  }
}
