const { calcularMDC } = require('./exercicio_1')

describe('Cálculo do MDC', () => {
    it('MDC entre 2 números distintos maiores que zero', () => {
        expect(calcularMDC(14,15)).toBe(1)
        expect(calcularMDC(32,48)).toBe(16)
        expect(calcularMDC(2000,1000)).toBe(1000)
        expect(calcularMDC(1000,2000)).toBe(1000)
    })
    it('MDC entre 2 números iguais', () => {
        expect(calcularMDC(20,20)).toBe(20)
        expect(calcularMDC(100,100)).toBe(100)
    })
    it('MDC entre 2 números sendo ao menos um igual a zero', () => {
        expect(calcularMDC(100,0)).toBe(1)
        expect(calcularMDC(0,100)).toBe(1)
        expect(calcularMDC(0,0)).toBe(1)
    })
});