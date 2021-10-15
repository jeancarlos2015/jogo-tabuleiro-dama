import { EventEmitter, Injectable } from '@angular/core';
import { Peca } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class JogoTabuleiroService {
  public pecaAtualJogador1Evento = new EventEmitter<Peca>();
  public pecaAtualJogador2Evento = new EventEmitter<Peca>();
  public pecasJogador1CapturadasEvento = new EventEmitter<Peca[]>();
  public pecasJogador2CapturadasEvento = new EventEmitter<Peca[]>();
  constructor() { }

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
}
