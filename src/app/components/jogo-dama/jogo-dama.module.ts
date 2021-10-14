import { JogoTabuleiroModule } from './components/jogo-tabuleiro/jogo-tabuleiro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDamaRoutingModule } from './jogo-dama-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JogoTabuleiroModule,
    JogoDamaRoutingModule
  ]
})
export class JogoDamaModule { }
