import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage, State } from "../../types";
import GovernanceData from "../../GovernanceData";

import SingleSimpleState from "../../StateHandlers/SingleSimpleState";

class LoanTokenSettingLowerAdmin {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  governor: State;
  admin: State;
  pauser: State;

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
    this.admin = singleSimpleStateCreator(
      (state: State) => {
        this.admin = state;
        this.governanceData.change();
      },
      "admin",
      "Admin"
    );
    this.pauser = singleSimpleStateCreator(
      (state: State) => {
        this.pauser = state;
        this.governanceData.change();
      },
      "pauser",
      "Pauser"
    );
  }

  getParams(): ContractParam[] {
    return [this.governor, this.admin, this.pauser];
  }
}

export default LoanTokenSettingLowerAdmin;
