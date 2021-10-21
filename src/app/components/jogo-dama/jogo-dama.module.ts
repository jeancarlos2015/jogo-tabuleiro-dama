
import { JogoTabuleiroModule } from './components/jogo-tabuleiro/jogo-tabuleiro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDamaRoutingModule } from './jogo-dama-routing.module';
import { CadastroJogadorModule } from './components/cadastro-jogador/cadastro-jogador.module';
import { JogoDamaComponent } from './jogo-dama.component';
import { MegaMenuModule } from 'primeng/megamenu';


@NgModule({
  declarations: [
    JogoDamaComponent
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    JogoTabuleiroModule,
    JogoDamaRoutingModule,
    CadastroJogadorModule,
  ]
})
export class JogoDamaModule { }
