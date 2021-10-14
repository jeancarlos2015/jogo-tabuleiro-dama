export class Peca {
  color;
  ePreto = false;
  valor = 1;
  id;
  selecionado = false;
  estaVazio = true;
  linha = 1;
  coluna = 1;
  constructor(ePreto = false, linha = 1, coluna = 1) {
    this.ePreto = ePreto;
    this.linha = linha;
    this.coluna = coluna;
  }
}
export class Casa {
  cor;
  peca: Peca;
}
export class Tabuleiro {
  pecas: Peca[][];

}

export class Diagonal {
  origem: Peca;
  destino: Peca;
  constructor(origem, destino) {
    this.origem = origem;
    this.destino = destino;
  }
}
