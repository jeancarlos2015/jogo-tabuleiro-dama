import { JogoDamaComponent } from './jogo-dama.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:JogoDamaComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('../jogo-dama/components/jogo-tabuleiro/jogo-tabuleiro.module').then(m => m.JogoTabuleiroModule)
      },
      {
        path:'cadastro',
        loadChildren: () => import('../jogo-dama/components/cadastro-jogador/cadastro-jogador.module').then(m => m.CadastroJogadorModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogoDamaRoutingModule { }
