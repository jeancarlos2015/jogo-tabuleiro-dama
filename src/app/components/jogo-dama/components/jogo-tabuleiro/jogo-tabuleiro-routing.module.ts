import { JogoTabuleiroComponent } from './jogo-tabuleiro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JogoTabuleiroComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogoTabuleiroRoutingModule { }
