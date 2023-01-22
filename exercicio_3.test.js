const { somarMultiplos } = require('./exercicio_3')

describe('Soma de múltiplos', () => {
    it('Verificar a soma de todos os múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(somarMultiplos(1000)).toBe(156361)
    });
});