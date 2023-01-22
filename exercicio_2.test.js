const { retornarIndiceMaiorValor, retornarMaiorValor, retornarIndiceMenorValor, retornarMenorValor } = require('./exercicio_2')

let numbers = [0, null, -1002, 0.1000001, 1.1, 101, 10, 9.9999, 1000, 999, 1, 1001, 107, 777, 1e2];

let numbers_2 = [99.99, 100, 0];

describe('Verificar retorno dos Índices com o Maior e o Menor valor de um array', () => {

    it('Verificar retorno do Índice com Maior valor', () => {
        expect(retornarIndiceMaiorValor(numbers)).toBe(11)
        expect(retornarMaiorValor(numbers)).toBe(1001)

        expect(retornarIndiceMaiorValor(numbers_2)).toBe(1)
        expect(retornarMaiorValor(numbers_2)).toBe(100)
    });

    it('Verificar retorno do Índice com Menor valor', () => {
        expect(retornarIndiceMenorValor(numbers)).toBe(2)
        expect(retornarMenorValor(numbers)).toBe(-1002)

        expect(retornarIndiceMenorValor(numbers_2)).toBe(2)
        expect(retornarMenorValor(numbers_2)).toBe(0)
    });

});