
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDamaRoutingModule } from './components/jogo-dama/jogo-dama-routing.module';
import { JogoDamaModule } from './components/jogo-dama/jogo-dama.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { JogoTabuleiroService } from './components/jogo-dama/components/jogo-tabuleiro/jogo-tabuleiro.service';
import { ExibeMensagensService } from './components/jogo-dama/components/jogo-tabuleiro/exibe-mensagens.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    AppRoutingModule,
    JogoDamaRoutingModule,
    JogoDamaModule,
  ],
  providers: [MessageService,JogoTabuleiroService,ExibeMensagensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
