//let numbers = [0, null, -1002, 0.1000001, 1.1, 101, 10, 9.9999, 1000, 999, 1, 1001, 107, 777, 1e2];

function retornarIndiceMaiorValor(numbers) {
    var firstIndexOfBiggerValue = numbers.indexOf(Math.max.apply(undefined, numbers));
    return firstIndexOfBiggerValue;
}

function retornarMaiorValor(numbers) {
    var BiggerValue = Math.max.apply(undefined, numbers);
    return BiggerValue;
}

function retornarIndiceMenorValor(numbers) {
    var firstIndexOfSmallerValue = numbers.indexOf(Math.min.apply(undefined, numbers))
    return firstIndexOfSmallerValue;
}

function retornarMenorValor(numbers) {
    var SmallerValue = Math.min.apply(undefined, numbers)  
    return SmallerValue;
}

module.exports = { retornarIndiceMaiorValor, retornarMaiorValor, retornarIndiceMenorValor, retornarMenorValor }

/*
console.log("Índice de maior valor: " + firstIndexOfBiggerValue + "\nValor: " + Math.max.apply(undefined, numbers) + "\n")
console.log("Índice de menor valor: " + firstIndexOfSmallerValue + "\nValor: " + Math.min.apply(undefined, numbers))*/