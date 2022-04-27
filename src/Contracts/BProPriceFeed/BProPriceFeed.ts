import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam } from "../../types";

class BProPriceFeed {
  contract: ethers.Contract;
  address: string;
  contractName: string;
  mocStateAddress: string;

  constructor(
    contractName: string,
    provider: ethers.providers.Provider,
    address: string
  ) {
    this.contractName = contractName;
    this.address = address;
    this.contract = new ethers.Contract(address, abi, provider);
  }

  getParams(): ContractParam[] {
    return [];
  }
}

export default BProPriceFeed;
