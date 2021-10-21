import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ExibeMensagensService {

  constructor(
    private messageService: MessageService,
  ) { }

  mostrarMensagem(detail, summary, serverity) {
    this.messageService.add({ severity: serverity, summary: summary, detail: detail });
  }
  mostrarMensagemSucesso(mensagem: string) {
    this.mostrarMensagem(mensagem, 'Sucesso', 'success');
  }

  mostrarMensagemAtencao(validacao = false, mensagem: string) {
    if (validacao) {
      this.mostrarMensagem(mensagem, 'Atenção', 'warn');
    }

  }

  mostrarMensagemErro(mensagem: string) {
    this.mostrarMensagem(mensagem, 'Erro', 'error');
  }

}
