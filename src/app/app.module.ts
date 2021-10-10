
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDamaRoutingModule } from './components/jogo-dama/jogo-dama-routing.module';
import { JogoDamaModule } from './components/jogo-dama/jogo-dama.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JogoDamaRoutingModule,
    JogoDamaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
