import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage, State } from "../../types";
import GovernanceData from "../../GovernanceData";

import SingleSimpleState from "../../StateHandlers/SingleSimpleState";
import MappingSimpleState from "../../StateHandlers/MappingSimpleState";

class PriceFeeds {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  governor: State;
  protocolTokenEthPrice: State;
  globalPricingPaused: State;
  pricesFeeds: State;
  decimals: State;

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

    const mappingSimpleStateCreator = MappingSimpleState(
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

    this.protocolTokenEthPrice = singleSimpleStateCreator(
      (state: State) => {
        this.protocolTokenEthPrice = state;
        this.governanceData.change();
      },
      "protocolTokenEthPrice",
      "ETH Price"
    );

    this.globalPricingPaused = singleSimpleStateCreator(
      (state: State) => {
        this.globalPricingPaused = state;
        this.governanceData.change();
      },
      "globalPricingPaused",
      "Global Pricing Paused",
      this.contract.filters.GlobalPricingPaused(null, null)
    );

    this.pricesFeeds = mappingSimpleStateCreator(
      (state: State) => {
        this.pricesFeeds = state;
        this.governanceData.change();
      },
      "pricesFeeds",
      "Token Price Feeds",
      Object.values(governanceData.tokenList).map((token) =>
        token.address.toLowerCase()
      )
    );

    this.decimals = mappingSimpleStateCreator(
      (state: State) => {
        this.decimals = state;
        this.governanceData.change();
      },
      "decimals",
      "decimals",
      Object.values(governanceData.tokenList).map((token) =>
        token.address.toLowerCase()
      )
    );
  }

  getParams(): ContractParam[] {
    return [
      this.governor,
      this.protocolTokenEthPrice,
      this.globalPricingPaused,
      this.pricesFeeds,
      this.decimals,
    ];
  }
}

export default PriceFeeds;
