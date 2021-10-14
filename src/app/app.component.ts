import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MegaMenuItem[];
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.inicializaMenu();
  }

  inicializaMenu() {
    this.items = [
      {
        label: 'Ferramentas', icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: 'Jogo',
              items: [
                {
                  label: 'Finalizar Jogo',
                  command: () => {
                    console.log('foi')
                  }
                },
                {
                  label: 'Novo Jogo',
                  command: () => {
                    console.log('foi')
                  }
                },
                {
                  label: 'Salvar Jogo',
                  command: () => {
                    console.log('foi')
                  }
                },
                {
                  label: 'Voltar',
                  command: () => {
                    console.log('foi')
                  }
                },
                {
                  label: 'Avançar',
                  command: () => {
                    console.log('foi')
                  }
                }
              ]
            },

          ],

        ]
      }
    ];
  }
}
