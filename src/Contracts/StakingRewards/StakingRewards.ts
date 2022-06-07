import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage, State } from "../../types";
import GovernanceData from "../../GovernanceData";

import SingleSimpleState from "../../StateHandlers/SingleSimpleState";

class Staking {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  governor: State;
  averageBlockTime: State;
  maxDuration: State;

  constructor(
    contractName: string,
    address: string,
    governanceData: GovernanceData
  ) {
    this.localStorage = governanceData.localStorage;
    this.contractName = contractName;
    this.address = address;
    this.governanceData = governanceData;
    this.contract = new ethers.Contract(
      address,
      abi,
      this.governanceData.provider
    );
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
    this.averageBlockTime = singleSimpleStateCreator(
      (state: State) => {
        this.averageBlockTime = state;
        this.governanceData.change();
      },
      "averageBlockTime",
      "Average Block Time"
    );
    this.maxDuration = singleSimpleStateCreator(
      (state: State) => {
        this.maxDuration = state;
        this.governanceData.change();
      },
      "maxDuration",
      "Max Duration"
    );
  }

  getParams(): ContractParam[] {
    return [this.governor, this.averageBlockTime, this.maxDuration];
  }
}

export default Staking;
