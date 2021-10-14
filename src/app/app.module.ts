
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDamaRoutingModule } from './components/jogo-dama/jogo-dama-routing.module';
import { JogoDamaModule } from './components/jogo-dama/jogo-dama.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    AppRoutingModule,
    JogoDamaRoutingModule,
    JogoDamaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
