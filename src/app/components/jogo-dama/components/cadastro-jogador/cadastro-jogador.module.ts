import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroJogadorRoutingModule } from './cadastro-jogador-routing.module';
import { CadastroJogadorComponent } from './cadastro-jogador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    CadastroJogadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    MegaMenuModule,
    ReactiveFormsModule,
    CadastroJogadorRoutingModule,
  ]
})
export class CadastroJogadorModule { }
