import { IndividualCustomer, EnterpriseCustomer } from './customer'

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf)
}

const createEnterpriseCustomer = (
  firstName: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(firstName, cnpj)
}

afterEach(() => jest.clearAllMocks())

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and Cpf', () => {
    const sut = createIndividualCustomer('Ramires', 'Matias', '111.111')
    expect(sut).toHaveProperty('firstName', 'Ramires')
    expect(sut).toHaveProperty('lastName', 'Matias')
    expect(sut).toHaveProperty('cpf', '111.111')
  })

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Ramires', 'Matias', '111.111')
    expect(sut.getName()).toBe('Ramires Matias')
    expect(sut.getIDN()).toBe('111.111')
  })
})

describe('EnterpriseCustomer', () => {
  it('should have firstName and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222.222')
    expect(sut).toHaveProperty('firstName', 'Udemy')
    expect(sut).toHaveProperty('cnpj', '222.222')
  })

  it('should have firstName and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222.222')
    expect(sut.getName()).toBe('Udemy')
    expect(sut.getIDN()).toBe('222.222')
  })
})
