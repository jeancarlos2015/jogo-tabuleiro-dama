import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-jogador',
  templateUrl: './cadastro-jogador.component.html',
  styleUrls: ['./cadastro-jogador.component.scss']
})
export class CadastroJogadorComponent implements OnInit {
  formulario: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nick1: new FormControl(null, Validators.compose([Validators.required])),
     nick2: new FormControl(null, Validators.compose([Validators.required]))
    });
  }

}
