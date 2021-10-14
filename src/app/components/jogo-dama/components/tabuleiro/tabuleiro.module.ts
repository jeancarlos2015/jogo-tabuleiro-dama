import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabuleiroRoutingModule } from './tabuleiro-routing.module';
import { TabuleiroComponent } from './tabuleiro.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { PecaTabuleiroComponent } from './peca-tabuleiro/peca-tabuleiro.component';

@NgModule({
  declarations: [
    TabuleiroComponent,
    PecaTabuleiroComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    TableModule,
    ButtonModule,
    TabuleiroRoutingModule,

  ]
})
export class TabuleiroModule { }
