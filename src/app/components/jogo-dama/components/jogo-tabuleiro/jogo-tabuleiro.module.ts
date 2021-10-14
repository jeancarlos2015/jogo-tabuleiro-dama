
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { JogoTabuleiroRoutingModule } from './jogo-tabuleiro-routing.module';
import { JogoTabuleiroComponent } from './jogo-tabuleiro.component';
import { PecaTabuleiroComponent } from './tabuleiro/peca-tabuleiro/peca-tabuleiro.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';



@NgModule({
  declarations: [
    JogoTabuleiroComponent,
    TabuleiroComponent,
    PecaTabuleiroComponent,
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    PanelModule,
    TableModule,
    ButtonModule,
    JogoTabuleiroRoutingModule
  ]
})
export class JogoTabuleiroModule { }
