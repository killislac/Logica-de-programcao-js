function calculoDesconto(tipo, valor){

    if (tipo === 'Cliente'){
        mensagem = `Total: ${valor}`

    }else if(tipo === 'Funcionarios'){
       desconto = (valor * 10 / 100);
       descontado = (valor - desconto);
        mensagem = `Total: ${descontado}`;
    } else  if (tipo === "VIP"){
        desconto = (valor * 5 / 100);
        descontado = (valor - desconto);
        mensagem = `Total: ${descontado}`;
    }else {
        mensagem = "Tipo inválido";
    }

    return mensagem;
}