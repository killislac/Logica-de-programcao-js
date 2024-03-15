const nota1 = 7, nota2 = 7, nota3 = 7;
const condicao = (nota1 + nota2 + nota3) / 3;

if (condicao >= 7) {
    console.log('Aprovado')
}
else if (condicao <= 5) {
    console.log('Reprovado')
} else{
    console.log('Exame')
}