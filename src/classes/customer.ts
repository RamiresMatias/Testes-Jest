import {
  IndividualProtocol,
  CustomerProtocol,
} from '../interfaces/customer-protocol'

// Classe de um indivíduo pessoal
// A interface é totalmente incompatível com a classe
// export class IndividualCustomer implements CustomerProtocol {
//   firstName: string
//   lastName: string
//   cpf: string
//   cnpj: string

//   constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.cpf = cpf
//     this.cnpj = cnpj
//   }
// }

// Classe de um indivíduo pessoal
// export class EnterpriseCustomer implements CustomerProtocol {
//   firstName: string
//   lastName: string
//   cpf: string
//   cnpj: string

//   constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.cpf = cpf
//     this.cnpj = cnpj
//   }
// }

export class IndividualCustomer
  implements IndividualProtocol, CustomerProtocol
{
  firstName: string
  lastName: string
  cpf: string
  cnpj: string

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.cpf = cpf
    this.cnpj = ''
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName
  }

  getIDN(): string {
    return this.cpf
  }
}

export class EnterpriseCustomer
  implements CustomerProtocol, IndividualProtocol
{
  firstName: string
  cnpj: string
  lastName: string
  cpf: string

  constructor(firstName: string, cnpj: string) {
    this.firstName = firstName
    this.cnpj = cnpj
    this.lastName = ''
    this.cpf = ''
  }

  getName(): string {
    return this.firstName
  }

  getIDN(): string {
    return this.cnpj
  }
}
