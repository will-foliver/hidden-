class cliente{
    nome;
    datanascimento;
    cpf;
    email;
    telefone;
    tipodeconta;
    saldo;
    depositar(valor){
        if(valor < 0){
            console.log('voce ta pobre PARAAAAAAAA!!!')
        }else{
            this.saldo -= valor
            console.log('pix valor ${valor} foi depositado com sucesso!')
        }
        
        this.saldo += valor
        console.log('O valor de ${valor} foi efetuado com sucesso!')
    }
    //argumento e o valor passado
    //parametro e a palavra para o argumento
    pix(valor){
        this.saldo -= valor 
        console.log('PIX NO VALOR ${valor} foi efetuado com sucesso!')
    }
}


var cliente1 = new cliente
cliente1.nome = 'leo'
cliente.datanascimento = '11/03/2000'
cliente.cpf = 8888888
cliente.email = 'chaulinmatador@deporco.com'
cliente.saldo = 0
cliente1.pix(100)

console.log(cliente1)