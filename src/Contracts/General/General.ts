import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage, State } from "../../types";
import GovernanceData from "../../GovernanceData";

import SingleSimpleState from "../../StateHandlers/SingleSimpleState";

class General {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  chain: string;
  governor: State;

  constructor(
    contractName: string,
    address: string,
    governanceData: GovernanceData,
    chain: string | undefined = "rsk"
  ) {
    this.localStorage = governanceData.localStorage;
    this.contractName = contractName;
    this.address = address;
    this.governanceData = governanceData;
    this.chain = chain;

    let provider;

    if (chain === "eth") {
      provider = this.governanceData.ethProvider;
    } else if (chain === "bsc") {
      provider = this.governanceData.bscProvider;
    } else {
      provider = this.governanceData.provider;
    }

    this.contract = new ethers.Contract(address, abi, provider);
    const singleSimpleStateCreator = SingleSimpleState(
      this.localStorage,
      this.contract
    );
    this.governor = singleSimpleStateCreator(
      (state: State) => {
        this.governor = state;
        this.governanceData.change();
      },
      "owner",
      "Governor",
      this.contract.filters.OwnershipTransferred(null, null)
    );
  }

  getParams(): ContractParam[] {
    return [this.governor];
  }
}

export default General;
