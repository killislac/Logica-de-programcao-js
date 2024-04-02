const nota1 = 7, nota2 = 7, nota3 = 7;
const condicao = (nota1 + nota2 + nota3) / 3;

if (condicao >= 7) {
    console.log(`Aprovado com nota: ${condicao}`);
}
else if (condicao <= 5) {
    console.log(`Reprovado com nota: ${condicao}`)
} else{
    console.log(`Exame, sua nota foi: ${condicao}`)
}