import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('../jogo-dama/components/tabuleiro/tabuleiro.module').then(m => m.TabuleiroModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogoDamaRoutingModule { }
