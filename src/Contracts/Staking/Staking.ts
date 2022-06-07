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
  newStakingContract: State;
  feeSharing: State;
  weightScaling: State;
  allUnlocked: State;
  vestingRegistryLogic: State;
  paused: State;
  frozen: State;

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
    this.newStakingContract = singleSimpleStateCreator(
      (state: State) => {
        this.newStakingContract = state;
        this.governanceData.change();
      },
      "newStakingContract",
      "New Staking Contract"
    );
    this.feeSharing = singleSimpleStateCreator(
      (state: State) => {
        this.feeSharing = state;
        this.governanceData.change();
      },
      "feeSharing",
      "Fee Sharing"
    );
    this.weightScaling = singleSimpleStateCreator(
      (state: State) => {
        this.weightScaling = state;
        this.governanceData.change();
      },
      "weightScaling",
      "Weight Scaling"
    );
    this.allUnlocked = singleSimpleStateCreator(
      (state: State) => {
        this.allUnlocked = state;
        this.governanceData.change();
      },
      "allUnlocked",
      "All Unlocked"
    );
    this.vestingRegistryLogic = singleSimpleStateCreator(
      (state: State) => {
        this.vestingRegistryLogic = state;
        this.governanceData.change();
      },
      "vestingRegistryLogic",
      "Vesting Registry Logic"
    );
    this.paused = singleSimpleStateCreator(
      (state: State) => {
        this.paused = state;
        this.governanceData.change();
      },
      "paused",
      "Paused"
    );
    this.frozen = singleSimpleStateCreator(
      (state: State) => {
        this.frozen = state;
        this.governanceData.change();
      },
      "frozen",
      "Frozen"
    );
  }

  getParams(): ContractParam[] {
    return [
      this.governor,
      this.newStakingContract,
      this.feeSharing,
      this.weightScaling,
      this.allUnlocked,
      this.vestingRegistryLogic,
      this.paused,
      this.frozen,
    ];
  }
}

export default Staking;
