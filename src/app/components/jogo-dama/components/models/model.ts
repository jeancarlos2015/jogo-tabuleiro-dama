export class Peca {
  valor = 1;
  constructor(valor = 1) {
    this.valor = valor;
  }
}
export class Casa {
  peca: Peca;
  ePreto = false;
  linha;
  coluna;
  valor=1;
  id;
  selecionado = false;
  constructor(peca: Peca = null, ePreto = false, linha = 1, coluna = 1) {
    this.peca = peca;
    this.ePreto = ePreto;
    this.linha = linha;
    this.coluna = coluna;
    this.selecionado = peca != null;
    this.valor = peca ? peca.valor : this.valor;
  }
}
export class Tabuleiro {
  casas: Casa[][];
}

export class Diagonal {
  origem: Casa;
  destino: Casa;
  constructor(origem, destino) {
    this.origem = origem;
    this.destino = destino;
  }
}
