import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage, State } from "../../types";
import GovernanceData from "../../GovernanceData";

import SingleSimpleState from "../../StateHandlers/SingleSimpleState";

class LockedSOV {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  governer: State;
  newLockedSOV: State;
  duration: State;
  cliff: State;
  vestingRegistry: State;

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
    this.governer = singleSimpleStateCreator(
      (state: State) => {
        this.governer = state;
        this.governanceData.change();
      },
      "owner",
      "Governer",
      this.contract.filters.OwnershipTransferred(null, null)
    );
    this.newLockedSOV = singleSimpleStateCreator(
      (state: State) => {
        this.newLockedSOV = state;
        this.governanceData.change();
      },
      "newLockedSOV",
      "New Locked SOV"
    );
    this.duration = singleSimpleStateCreator(
      (state: State) => {
        this.duration = state;
        this.governanceData.change();
      },
      "duration",
      "Duration"
    );
    this.cliff = singleSimpleStateCreator(
      (state: State) => {
        this.cliff = state;
        this.governanceData.change();
      },
      "cliff",
      "Cliff"
    );
    this.vestingRegistry = singleSimpleStateCreator(
      (state: State) => {
        this.vestingRegistry = state;
        this.governanceData.change();
      },
      "vestingRegistry",
      "VestingRegistry"
    );
  }

  getParams(): ContractParam[] {
    return [
      this.governer,
      this.newLockedSOV,
      this.duration,
      this.cliff,
      this.vestingRegistry,
    ];
  }
}

export default LockedSOV;
