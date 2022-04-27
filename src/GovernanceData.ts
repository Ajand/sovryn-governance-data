import { ethers } from "ethers";
import {
  LocalStorage,
  ContractsAddresses,
  ContractData,
  OnChangeCallback,
} from "./types";

import MainnetAddresses from "./MainnetAddresses";
import BProPriceFeed from "./Contracts/BProPriceFeed/BProPriceFeed";

// This is going to be the main entry of the package
// Everything we need will be returned by an instance of this
class GovernanceData {
  provider: ethers.providers.Provider;
  localStorage: LocalStorage;
  contractsAddresses: ContractsAddresses;

  bProPriceFeed: BProPriceFeed;

  onChangeCallback: OnChangeCallback;

  constructor(
    localStorage: LocalStorage,
    rpcUrl: string = "https://public-node.rsk.co",
    contractsAddresses: ContractsAddresses = MainnetAddresses
  ) {
    this.localStorage = localStorage;
    this.provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    this.contractsAddresses = contractsAddresses;
    this.bProPriceFeed = new BProPriceFeed(
      "BPro PriceFeed",
      this.contractsAddresses.priceFeeds.bProPriceFeed,
      this
    );
  }

  getData(): ContractData[] {
    return [
      {
        contractName: this.bProPriceFeed.contractName,
        address: this.bProPriceFeed.address,
        params: this.bProPriceFeed.getParams(),
      },
    ];
  }

  onChange(callback: OnChangeCallback) {
    this.onChangeCallback = callback;
  }

  change() {
    this.onChangeCallback(this.getData());
  }
}

export default GovernanceData;
