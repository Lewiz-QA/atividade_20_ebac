let numbers = [0, null, -1002, 0.1000001, 1, 100, 10, 9.9999, 1000, 999, 0001, 1001, 1000, 777, 1e3];
console.log("Índice de maior valor: " + Math.max.apply(undefined, numbers))
console.log("Índice de menor valor: " + Math.min.apply(undefined, numbers))