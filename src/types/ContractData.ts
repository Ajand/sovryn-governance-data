interface ContractParam {
  name: string;
  value: string;
}

interface ContractData {
  contractName: string;
  address: string;
  params: ContractParam[];
}

export { ContractParam, ContractData };
