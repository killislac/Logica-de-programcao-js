function somaTriangulo(a, b ,c){
    const ladoA = a, ladoB = b, ladoC = c
    let mensagem;
    if (ladoA === ladoB && ladoC === ladoB){
        mensagem = 'triângulo é equilátero';
       
    }else if((ladoA == ladoB) || (ladoC == ladoA) || (ladoB == ladoC)){
        mensagem = 'triângulo é Isoceles';
    } else {
        mensagem = 'triângulo é Escaleno';
    }

    return mensagem;
}