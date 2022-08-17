import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage, State } from "../../types";
import GovernanceData from "../../GovernanceData";

import SingleSimpleState from "../../StateHandlers/SingleSimpleState";
import SingleInputState from "../../StateHandlers/SingleInputState";

class Sovryn {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  governor: State;

  protocolSettings: State;
  loanSettings: State;
  loanOpenings: State;
  loanClosingsLiquidation: State;
  loanClosingsRollover: State;
  loanClosingsWith: State;
  loanMaintenance: State;
  protocolMigration: State;
  swapsExternal: State;
  affiliateModule: State;

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
    const singleInputStateCreator = SingleInputState(
      this.localStorage,
      this.contract
    );

    this.protocolSettings = singleInputStateCreator(
      (state: State) => {
        this.protocolSettings = state;
        this.governanceData.change();
      },
      "getTarget",
      "Protocol Settings",
      "setPriceFeedContract(address)"
    );

    this.loanSettings = singleInputStateCreator(
      (state: State) => {
        this.loanSettings = state;
        this.governanceData.change();
      },
      "getTarget",
      "Loan Settings",
      "minInitialMargin(bytes32)"
    );

    this.loanOpenings = singleInputStateCreator(
      (state: State) => {
        this.loanOpenings = state;
        this.governanceData.change();
      },
      "getTarget",
      "Loan Openings",
      "setDelegatedManager(bytes32,address,bool)"
    );

    this.loanClosingsLiquidation = singleInputStateCreator(
      (state: State) => {
        this.loanClosingsLiquidation = state;
        this.governanceData.change();
      },
      "getTarget",
      "LoanClosingsLiquidation",
      "liquidate(bytes32,address,uint256)"
    );

    this.loanClosingsRollover = singleInputStateCreator(
      (state: State) => {
        this.loanClosingsLiquidation = state;
        this.governanceData.change();
      },
      "getTarget",
      "LoanClosingsRollover",
      "rollover(bytes32,bytes)"
    );

    this.loanClosingsWith = singleInputStateCreator(
      (state: State) => {
        this.loanClosingsLiquidation = state;
        this.governanceData.change();
      },
      "getTarget",
      "LoanClosingsWith",
      "closeWithSwap(bytes32,address,uint256,bool,bytes)"
    );

    this.loanMaintenance = singleInputStateCreator(
      (state: State) => {
        this.loanMaintenance = state;
        this.governanceData.change();
      },
      "getTarget",
      "Loan Maintenance",
      "depositCollateral(bytes32,uint256)"
    );

    this.protocolMigration = singleInputStateCreator(
      (state: State) => {
        this.protocolMigration = state;
        this.governanceData.change();
      },
      "getTarget",
      "Protocol Migration",
      "getLegacyOracle(address)"
    );

    this.swapsExternal = singleInputStateCreator(
      (state: State) => {
        this.swapsExternal = state;
        this.governanceData.change();
      },
      "getTarget",
      "Swaps External",
      "getSwapExpectedReturn(address,address,uint256)"
    );

    this.affiliateModule = singleInputStateCreator(
      (state: State) => {
        this.affiliateModule = state;
        this.governanceData.change();
      },
      "getTarget",
      "Affiliates Module",
      "getUserNotFirstTradeFlag(address)"
    );
  }

  getParams(): ContractParam[] {
    return [
      this.governor,
      this.protocolSettings,
      this.loanSettings,
      this.loanOpenings,
      this.loanClosingsLiquidation,
      this.loanClosingsRollover,
      this.loanClosingsWith,
      this.protocolMigration,
      this.swapsExternal,
      this.affiliateModule,
    ];
  }
}

export default Sovryn;
