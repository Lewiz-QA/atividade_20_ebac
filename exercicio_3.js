//somarMultiplos(1000);
function somarMultiplos(limite) {
    let resultado = 0
    for (let i = 0; i < limite; i++) {
        if (i % 5 === 0 || i % 7 === 0)
            resultado += i;
    }
    return resultado;
    //console.log("Soma de todos os múltiplos de 5 e 7 abaixo de 1000: " + resultado)
}

module.exports = { somarMultiplos }