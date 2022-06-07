interface ContractParam {
  name: string;
  value: any;
  loading?: boolean;
  identifier?: string;
}

interface ContractData {
  contractName: string;
  address: string;
  params: ContractParam[];
}

type OnChangeCallback = (data: any) => void;

export { ContractParam, ContractData, OnChangeCallback };
