import { EventEmitter, Injectable } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Jogador, Jogo, Peca, Tabuleiro } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class JogoTabuleiroService {
  public pecaAtualJogador1Evento = new EventEmitter<Peca>();
  public pecaAtualJogador2Evento = new EventEmitter<Peca>();
  public pecasJogador1CapturadasEvento = new EventEmitter<Peca[]>();
  public pecasJogador2CapturadasEvento = new EventEmitter<Peca[]>();
  public notificaJogadorJogada = new EventEmitter<Jogador>();
  public proximaJogada = new EventEmitter<Jogador>();
  public sendTabuleiro = new EventEmitter<Tabuleiro>();
  constructor(
    private persistence: PersistenceService
  ) { }

  // pecaAtualJogador1EventoMetodo(peca: Peca) {
  //   this.pecaAtualJogador1Evento.emit(peca);
  // }

  // pecaAtualJogador2EventoMetodo(peca: Peca) {
  //   this.pecaAtualJogador2Evento.emit(peca);
  // }
  // pecasJogador1CapturadasEventoMetodo(pecas: Peca[]) {
  //   this.pecasJogador1CapturadasEvento.emit(pecas);
  // }
  // pecasJogador2CapturadasEventoMetodo(pecas: Peca[]) {
  //   this.pecasJogador2CapturadasEvento.emit(pecas);
  // }
  salvarJogo(jogo: Jogo) {
    this.persistence.set('jogoDama', jogo, { type: StorageType.SESSION });
  }

  recuperarJogo(): Jogo {
    const jogo = this.persistence.get('jogoDama', StorageType.SESSION);
    if (jogo) {
      return jogo;
    }
    return null;
  }

  existeJogoSalvo() {
    const jogo = this.recuperarJogo();
    if (jogo) return true;
    return false;
  }

  removerJogo() {
    this.persistence.remove('jogoDama', StorageType.SESSION);
  }
}
