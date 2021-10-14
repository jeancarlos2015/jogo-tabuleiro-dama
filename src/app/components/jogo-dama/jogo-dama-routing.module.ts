import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('../jogo-dama/components/jogo-tabuleiro/jogo-tabuleiro.module').then(m => m.JogoTabuleiroModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogoDamaRoutingModule { }
