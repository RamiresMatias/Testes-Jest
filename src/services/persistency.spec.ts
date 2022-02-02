// Switch de testes
describe('Testando número', () => {
  it('descrição do teste (IT)', () => {
    const number = 1
    expect(number).toBe(1)
  })
})

describe('Testando string', () => {
  test('descrição do teste (TESTE)', () => {
    const nome = 'Luiz'
    expect(nome).toBe('Luiz')
  })
})
