function calculoDesconto(cliente, funcionarios, VIP){
    const tipo1 = cliente, tipo2 = funcionarios, tipo3 = VIP;
    let mensagem;
    let valor;
    if (tipo1 == cliente){
        mensagem = `${valor}`
       
    }else if(tipo2 == funcionarios){
       desconto = valor * 10 / 100;
       descontado = valor - desconto;
        mensagem = `${descontado}`;
    } else  if (tipo3 == VIP){
        desconto = valor * 5 / 100;
        descontado = valor - desconto;
        mensagem = `${descontado} `;
    }

    return mensagem;
}