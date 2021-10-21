
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroJogadorComponent } from './cadastro-jogador.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroJogadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroJogadorRoutingModule { }
