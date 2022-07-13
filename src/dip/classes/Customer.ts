import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/CustomerProtocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;

  constructor(firstName: string, cnpj: string) {
    this.name = firstName;
    this.cnpj = cnpj;
  }
}
