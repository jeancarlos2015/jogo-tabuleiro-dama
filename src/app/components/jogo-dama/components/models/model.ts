export class Peca {
  color;
  ePreto = false;
  valor = 1;
  id;
  selecionado = false;
  estaVazio = true;
  constructor(ePreto = false) {
    this.ePreto = ePreto;
  }
}
export class Casa {
  cor;
  peca: Peca;
}
export class Tabuleiro {
  pecas: Peca[][];

}
