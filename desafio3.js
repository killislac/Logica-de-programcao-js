let temperatura = parseFloat(window.prompt('Digite a temperatura:'));
const escala = window.prompt('Indique qual é a escala:').toUpperCase();
const conversao = window.prompt('Escala a ser convertida:F , K, C').toUpperCase();
console.log(`O valor não é NaN: ${!isNaN(temperatura)}`);


if(escala == 'C' && conversao == 'F' ){
    calculoFahrenhreit = (temperatura * 9/5) + 32;
    window.alert(`Celsius para Fahrenhreit:${calculoFahrenhreit} °F`);

}else if (escala == 'F'  && conversao == 'C' ){
    calculoCelsius = (temperatura - 32) * 5/9;
    window.alert(`Fahrenhereit para Celsius: ${calculoCelsius} °C`);

} else if (escala == 'K'  && conversao == 'C'){
    calculoCelsius2 = temperatura - 273.15;
    window.alert(`Kelvin para Celsius: ${calculoCelsius2} °C`);

} else if (escala == 'K'  && conversao == 'F' ){
    calculofah = temperatura * 9/5 - 459.67;
    window.alert(`Kelvin para Fahrenhereit: ${calculofah} °F`);

} else if (escala == 'C'  && conversao == 'K'){
    calculocel = (temperatura * 1) + 273.15;
    window.alert(`Celsius para Kelvin: ${calculocel} °K`);

} else if (escala == 'F'  && conversao == 'K'){
    calculokelvin = ((temperatura *1) + 459.67) * 5/9;
    window.alert(`Fahrenhereit para Kelvin: ${calculokelvin} °K`);
} else if (escala != 'C' || 'F' ||'K'){
    window.alert('Escala está incorreta!');
}else if (conversao != 'C' ||escala !='F' || escala != 'K'){
    window.alert('Conversao está incorreta!');
}else if (temperatura && escala && conversao != 'C' || 'F' || 'K'){
    window.alert('Todas as entradas estão erradas!');
}


