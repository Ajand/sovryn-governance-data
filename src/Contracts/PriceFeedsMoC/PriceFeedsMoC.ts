import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage, SingleState } from "../../types";
import GovernanceData from "../../GovernanceData";

import SingleSimpleState from "../../StateHandlers/SingleSimpleState";

class PriceFeedsMoC {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  rskOracleAddress: SingleState;
  mocOracleAddress: SingleState;

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

    this.rskOracleAddress = singleSimpleStateCreator(
      (state: SingleState) => {
        this.rskOracleAddress = state;
        this.governanceData.change();
      },
      "rskOracleAddress",
      "RSK Oracle Address",
      this.contract.filters.SetRSKOracleAddress(null, null)
    );

    this.mocOracleAddress = singleSimpleStateCreator(
      (state: SingleState) => {
        this.mocOracleAddress = state;
        this.governanceData.change();
      },
      "mocOracleAddress",
      "MoC Oracle Address",
      this.contract.filters.SetRSKOracleAddress(null, null)
    );
  }

  getParams(): ContractParam[] {
    return [this.rskOracleAddress, this.mocOracleAddress];
  }
}

export default PriceFeedsMoC;
