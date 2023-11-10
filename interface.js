"use strict";
class Conta {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor - this.taxaTransferencia;
        return true;
    }
}
const contaDaMaria = {
    transferir: function (valor, destinatario) {
        throw new Error("Function not implemented.");
    },
    taxaTransferencia: 0
};
