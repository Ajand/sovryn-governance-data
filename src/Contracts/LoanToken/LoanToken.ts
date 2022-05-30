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
  admin: State;
  pauser: State;
  liquidityMiningAddress: State;

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
    this.target = singleConstantStateCreator("target", "Target", target);
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
    this.liquidityMiningAddress = singleSimpleStateCreator(
      (state: State) => {
        this.liquidityMiningAddress = state;
        this.governanceData.change();
      },
      "liquidityMiningAddress",
      "Liquidity Mining Address"
    );
  }

  getParams(): ContractParam[] {
    return [
      this.governer,
      this.target,
      this.admin,
      this.pauser,
      this.liquidityMiningAddress,
    ];
  }
}

export default General;
