class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroConta:number) {
        this.numeroDaConta = numeroConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor - this.taxaTransferencia;
        return true;
    }

    taxaTransferencia: number = 0;
}

const contaDaMaria: ITransacional = {
    transferir: function (valor: number, destinatario: Conta): boolean {
        throw new Error("Function not implemented.");
    },
    taxaTransferencia: 0
}