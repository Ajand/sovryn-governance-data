import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage, State } from "../../types";
import GovernanceData from "../../GovernanceData";

import SingleSimpleState from "../../StateHandlers/SingleSimpleState";
import SingleSimpleStorage from "../../StateHandlers/SingleStorageState";
import SingleConstantState from "../../StateHandlers/SingleConstantState";

class General {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  governer: State;
  target: State;
  sovrynAddress: State;

  constructor(
    contractName: string,
    address: string,
    governanceData: GovernanceData,
    target: string
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
    this.governer = singleSimpleStateCreator(
      (state: State) => {
        this.governer = state;
        this.governanceData.change();
      },
      "owner",
      "Governer",
      this.contract.filters.OwnershipTransferred(null, null)
    );
    const singleConstantStateCreator = SingleConstantState();
    this.target = singleConstantStateCreator(
      "target",
      "Target",
      target
    );
  }

  getParams(): ContractParam[] {
    return [this.governer, this.target];
  }
}

export default General;
