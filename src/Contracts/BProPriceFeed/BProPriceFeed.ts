import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage, State } from "../../types";
import GovernanceData from "../../GovernanceData";

import SingleSimpleState from "../../StateHandlers/SingleSimpleState";

class BProPriceFeed {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  governor: State;
  mocStateAddress: State;

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
    this.mocStateAddress = singleSimpleStateCreator(
      (state: State) => {
        this.mocStateAddress = state;
        this.governanceData.change();
      },
      "mocStateAddress",
      "Money on Chain State Address",
      this.contract.filters.SetMoCStateAddress(null, null)
    );
  }

  getParams(): ContractParam[] {
    return [this.governor, this.mocStateAddress];
  }
}

export default BProPriceFeed;
