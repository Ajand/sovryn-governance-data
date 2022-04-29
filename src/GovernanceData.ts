import { ethers } from "ethers";
import {
  LocalStorage,
  ContractsAddresses,
  ContractData,
  OnChangeCallback,
  TokenList,
} from "./types";

import MainnetAddresses from "./MainnetAddresses";
import MainnetTokens from "./MainnetTokens";

import BProPriceFeed from "./Contracts/BProPriceFeed/BProPriceFeed";
import PriceFeedRSKOracle from "./Contracts/PriceFeedRSKOracle/PriceFeedRSKOracle";
import PriceFeedsMoC from "./Contracts/PriceFeedsMoC/PriceFeedsMoC";
import PriceFeeds from "./Contracts/PriceFeeds/PriceFeeds";

// This is going to be the main entry of the package
// Everything we need will be returned by an instance of this
class GovernanceData {
  provider: ethers.providers.Provider;
  localStorage: LocalStorage;
  onChangeCallback: OnChangeCallback;

  contractsAddresses: ContractsAddresses;
  tokenList: TokenList;

  bProPriceFeed: BProPriceFeed;
  priceFeedRSKOracle: PriceFeedRSKOracle;
  priceFeedsMoC: PriceFeedsMoC;
  priceFeeds: PriceFeeds;

  constructor(
    localStorage: LocalStorage,
    rpcUrl: string = "https://public-node.rsk.co",
    contractsAddresses: ContractsAddresses = MainnetAddresses,
    tokenList: TokenList = MainnetTokens
  ) {
    this.localStorage = localStorage;
    this.provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    this.contractsAddresses = contractsAddresses;
    this.tokenList = tokenList;
    this.bProPriceFeed = new BProPriceFeed(
      "BPro PriceFeed",
      this.contractsAddresses.priceFeeds.bProPriceFeed,
      this
    );
    this.priceFeedRSKOracle = new PriceFeedRSKOracle(
      "WRBTC PriceFeed (RSK)",
      this.contractsAddresses.priceFeeds.priceFeedRSKOracle,
      this
    );
    this.priceFeedsMoC = new PriceFeedsMoC(
      "Price Feed MoC (WRBTC)",
      this.contractsAddresses.priceFeeds.priceFeedsMoC,
      this
    );
    this.priceFeeds = new PriceFeeds(
      "Price Feeds",
      this.contractsAddresses.priceFeeds.priceFeeds,
      this
    );
  }

  getData(): ContractData[] {
    return [
      this.bProPriceFeed,
      this.priceFeedRSKOracle,
      this.priceFeedsMoC,
      this.priceFeeds,
    ].map((contract) => ({
      contractName: contract.contractName,
      address: contract.address,
      params: contract.getParams(),
    }));
  }

  onChange(callback: OnChangeCallback) {
    this.onChangeCallback = callback;
  }

  change() {
    this.onChangeCallback(this.getData());
  }
}

export default GovernanceData;
