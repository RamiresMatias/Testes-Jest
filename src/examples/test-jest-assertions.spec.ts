describe('Primitive values', () => {
  it('should test jest assertions', () => {
    // asserções de testes
    const number = 10

    expect(number).toBe(10)
    expect(number).toEqual(10)

    expect(number).not.toBeFalsy()
    expect(number).toBeTruthy()
  })

  it('Should test split', () => {
    const number = 10
    expect(number).toBeGreaterThan(9)
    expect(number).toBeGreaterThanOrEqual(10)
    expect(number).toBeLessThan(11)
    expect(number).toBeLessThanOrEqual(10)

    // Verifica se um número está próximo do inserido
    expect(number).toBeCloseTo(10.001, 1)

    expect(number).not.toBeNull()

    expect(number).toHaveProperty('toString')
  })
})

describe('Objects', () => {
  it('should test jest assertions with object', () => {
    const person = { name: 'Ramires', age: 22 }
    const anotherPerson = { ...person }

    expect(person).toEqual(anotherPerson)

    expect(person).toHaveProperty('age')
    expect(person).toHaveProperty('age', 22)

    expect(person).not.toHaveProperty('lastName')

    expect(person.name).toBe('Ramires')
  })
})
