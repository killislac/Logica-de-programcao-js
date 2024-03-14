# Logica-de-programcao-js
Treinando com javascript

## Operadores-aritmeticos.js

~~~js
const number1 = 40;
const number2 = 20;
~~~

A palavra `const` é utilizada para declaração de variáveis que não vão ser reatribuíds(não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js
console.log(`Os numeros das operações são ${number1} e ${number2}`);
console.log(`A soma dos numeros é ${number1 + number2}`);
console.log(`A subtracao dos numeros é ${number1 - number2}`);
console.log(`A multiplicacao dos numeros é ${number1 * number2}`);
console.log(`A divisao dos numeros é ${number1 / number2}`);
console.log(`A resto dos numeros é ${number1 % number2}`);
~~~

Em cada uma das operações, temos um operador aritméticos:

* `+`-> Soma
* `-` -> Subtração
* `*` -> Multiplicação
* `/`-> Divisão
* `%` -> Resto da divisão

## Operadores-Atribuição.js

~~~js
let numero = 10;
~~~

Declaramos a variável `numero` usando a palavra `let`, pois essa variável sera **reatribuída** ao longo do nosso código.

Em seguida, usando uma série de reatribuições usando os operadores de atribuição.

~~~js
console.log(`o numero é inicialmente igual a ${numero}`);
console.log(`Após reatribuir somando o numero 10: ${numero += 10}`);
console.log(`Após reatribuir subtraindo o numero 10: ${numero -= 10}`);
console.log(`Após reatribuir multiplicando o numero 10: ${numero *= 10}`);
console.log(`Após reatribuir dividindo 10: ${numero /= 10}`);
console.log(`Após reatribuir resto numero 10: ${numero %= 10}`);
console.log(`Incremento o número em 1: ${++ numero}`);
console.log(`Decremento o número em 1: ${-- numero}`);
console.log(`O numero final é igual a ${numero}`);
~~~

Operadores de atribuição:

* `+=` -> Atribuição com soma
* `-=` -> Atribuição com subtração
* `*=` -> Atribuição com multiplicação
* `/=` -> Atribuição com dividindo
* `%=` -> Atribuição com resto da divisão
* `++` -> Atribuição com **incremento** (pode ser *pré* ou *pós* incrementado) . Ex:`numero ++` (pós-incremento) ou `++ numero` (pré-incremento)
* `--` -> Atribuição com **decremento** (pode ser *pré* ou *pós* decremento).  Ex:`numero --` (pós-decremento) ou `-- numero` (pré-decremento)


