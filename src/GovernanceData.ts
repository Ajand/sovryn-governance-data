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
import General from "./Contracts/General/General";

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
  usdtPriceFeed: General;
  mocState: General;
  swapsImp: General;
  protocolSettings: General;
  loanSettings: General;
  loanOpening: General;
  loanMaintenance: General;
  loanClosing: General;

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
    this.usdtPriceFeed = new General(
      "USDT PriceFeed",
      this.contractsAddresses.priceFeeds.usdtPriceFeed,
      this
    );
    this.mocState = new General(
      "MoC State",
      this.contractsAddresses.priceFeeds.mocState,
      this
    );
    this.swapsImp = new General(
      "SwapsImpl",
      this.contractsAddresses.misc.swapsImpl,
      this
    );
    this.protocolSettings = new General(
      "ProtocolSettings",
      this.contractsAddresses.protocol.settings,
      this
    );
    this.loanSettings = new General(
      "LoanSettings",
      this.contractsAddresses.loan.settings,
      this
    );
    this.loanOpening = new General(
      "LoanOpening",
      this.contractsAddresses.loan.opening,
      this
    );
    this.loanMaintenance = new General(
      "LoanOpening",
      this.contractsAddresses.loan.maintenance,
      this
    );
    this.loanClosing = new General(
      "LoanOpening",
      this.contractsAddresses.loan.closing,
      this
    );
  }

  getData(): ContractData[] {
    return [
      this.bProPriceFeed,
      this.priceFeedRSKOracle,
      this.priceFeedsMoC,
      this.priceFeeds,
      this.usdtPriceFeed,
      this.mocState,
      this.swapsImp,
      this.protocolSettings,
      this.loanSettings,
      this.loanOpening,
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
