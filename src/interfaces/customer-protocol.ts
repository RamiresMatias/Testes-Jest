export interface CustomerOrder {
  getName(): string
  getIDN(): string
}

export interface IndividualProtocol {
  firstName: string
  lastName: string
  cpf: string
}

export interface CustomerProtocol {
  firstName: string
  cnpj: string
}
