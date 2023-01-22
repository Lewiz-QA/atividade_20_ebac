//Código com base no Algoritmo de Euclides

function calcularMDC(a, b) {

    if (a != 0 && b != 0) {
        while (b !== 0) {
            var resto = a % b; 
            a = b; 
            b = resto; 
        }
        return a;
    }
    else {
        return 1;
    }
}

module.exports = { calcularMDC }

/*var resultado1 = calcularMDC(14, 15);
var resultado2 = calcularMDC(32, 48);
var resultado3 = calcularMDC(100, 0);
var resultado4 = calcularMDC(0, 100);
var resultado5 = calcularMDC(0, 0);
var resultado6 = calcularMDC(2000, 1000);
var resultado7 = calcularMDC(1000, 2000);
var resultado8 = calcularMDC(20, 20);

console.log("MDC entre 14 e 15: " + resultado1);
console.log("MDC entre 32 e 48: " + resultado2);
console.log("MDC entre 100 e 0: " + resultado3);
console.log("MDC entre 0 e 100: " + resultado4);
console.log("MDC entre 0 e 0: " + resultado5);
console.log("MDC entre 2000 e 1000: " + resultado6);
console.log("MDC entre 1000 e 2000: " + resultado7);
console.log("MDC entre 20 e 20: " + resultado8);*/

/*Explicação do segundo resultado:
- resto de 32 com 48: 32
- a = 48
- b = 32
- resto de 48 com 32 = 16
- a = 32
- b = 16
- resto de 32 com 16 = 0
- a = 16
- b = 0
- retorna a = 17 como MDC*/

/*Resultados comparados com a seguinte calculadora:
https://www.4devs.com.br/calculadora_mdc*/