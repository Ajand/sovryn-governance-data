interface ContractParam {
  name: string;
  value: string;
}

interface ContractData {
  contractName: string;
  contractAddress: string;
  params: ContractParam[];
}

export { ContractParam, ContractData };
