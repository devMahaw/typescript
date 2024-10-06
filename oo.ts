class Pessoa {
  nome: string;
  renda?: number;

  constructor(nome: string, renda?: number) {
    this.nome = nome;
    this.renda = renda;
  }

  dizOla(): string {
    return `${this.nome} disse oi!`;
  }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
  depositar(valor: number): void {
    this.saldo = valor * 2;
  }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456);

ContaBancaria.retornaNumeroDoBanco();
