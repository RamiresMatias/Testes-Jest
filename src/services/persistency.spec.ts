import { Persistency } from './persistency'

describe('Persistency', () => {
  // Método para limpar os mocks após realizar os testes
  afterEach(() => jest.clearAllMocks())

  it('should return undefined', () => {
    // sut(System under test)
    // padrão de projeto para se referir a classe que está sendo testada
    const sut = new Persistency()
    expect(sut.saveOrder()).toBeUndefined()
  })

  it('should call console.log once', () => {
    const sut = new Persistency()
    // spyOn - funcionalidade do jest para verificar se tal função foi executada
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log with message', () => {
    const sut = new Persistency()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...')
  })
})
