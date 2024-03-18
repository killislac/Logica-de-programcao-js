const temperatura = window.prompt('Temperartura atual:');
const escala = window.prompt('Escolha a escala:');
const conversao = window.prompt ('Escolha a temperatura a ser covertida F, K ou C');
let calculo;

if (escala === 'C' && conversao ==='F'){
    calculo = (temperatura * 9/5) = 32
    window.alert(`Celsius para Fahrenheit: ${calculo} °F`)
}

