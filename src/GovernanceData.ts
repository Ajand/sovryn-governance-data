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
import Sovryn from "./Contracts/Sovryn/Sovryn";

// This is going to be the main entry of the package
// Everything we need will be returned by an instance of this
class GovernanceData {
  provider: ethers.providers.Provider;
  localStorage: LocalStorage;
  onChangeCallback: OnChangeCallback;

  contractsAddresses: ContractsAddresses;
  tokenList: TokenList;

  sovryn: Sovryn;

  bProPriceFeed: BProPriceFeed;
  priceFeedRSKOracle: PriceFeedRSKOracle;
  priceFeedsMoC: PriceFeedsMoC;
  priceFeeds: PriceFeeds;
  usdtPriceFeed: General;
  mocState: General;
  protocolSettings: General;

  loanSettings: General;
  loanOpening: General;
  loanMaintenance: General;
  loanClosing: General;
  loanClosingLiquidation: General;
  loanClosingRollover: General;
  loanClosingWith: General;
  loanClosingBase: General;

  docToken: General;
  wrbtc: General;
  usdt: General;
  bpro: General;
  eths: General;
  moc: General;
  xusd: General;
  fish: General;
  bnbs: General;
  rif: General;
  mynt: General;

  swapsImp: General;
  swapExternal: General;

  swapNetwork: General;

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
      "LoanMaintenance",
      this.contractsAddresses.loan.maintenance,
      this
    );
    this.loanClosing = new General(
      "LoanClosing",
      this.contractsAddresses.loan.closing,
      this
    );
    this.swapExternal = new General(
      "SwapsExternal",
      this.contractsAddresses.misc.swapExternal,
      this
    );

    this.sovryn = new Sovryn(
      "Sovryn Protocol",
      this.contractsAddresses.protocol.sovryn,
      this
    );

    this.loanClosingLiquidation = new General(
      "LoanClosingsLiquidation",
      this.contractsAddresses.loan.closingLiquidation,
      this
    );
    this.loanClosingRollover = new General(
      "LoanClosingsRollover",
      this.contractsAddresses.loan.closingRollover,
      this
    );
    this.loanClosingWith = new General(
      "LoanClosingsWith",
      this.contractsAddresses.loan.closingWith,
      this
    );
    this.loanClosingBase = new General(
      "LoanClosingsBase",
      this.contractsAddresses.loan.closingBase,
      this
    );

    this.docToken = new General(
      "DoC Token",
      this.contractsAddresses.tokens.docToken,
      this
    );
    this.wrbtc = new General(
      "WRBTC",
      this.contractsAddresses.tokens.wrbtc,
      this
    );
    this.usdt = new General("USDT", this.contractsAddresses.tokens.usdt, this);
    this.bpro = new General("BPRO", this.contractsAddresses.tokens.bpro, this);
    this.eths = new General("ETHs", this.contractsAddresses.tokens.eths, this);
    this.moc = new General("MOC", this.contractsAddresses.tokens.moc, this);
    this.xusd = new General("XUSD", this.contractsAddresses.tokens.xusd, this);
    this.fish = new General("FISH", this.contractsAddresses.tokens.fish, this);
    this.bnbs = new General("BNBs", this.contractsAddresses.tokens.bnbs, this);
    this.rif = new General("RIF", this.contractsAddresses.tokens.rif, this);
    this.mynt = new General("MYNT", this.contractsAddresses.tokens.mynt, this);

    this.swapNetwork = new General(
      "Swap Network ",
      this.contractsAddresses.swaps.general.swapNetwork,
      this
    );
  }

  getData(): ContractData[] {
    return [
      this.sovryn,
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
      this.loanMaintenance,
      this.loanClosing,
      this.loanClosingLiquidation,
      this.loanClosingRollover,
      this.loanClosingWith,
      this.loanClosingBase,
      this.swapExternal,
      this.docToken,
      this.wrbtc,
      this.usdt,
      this.bpro,
      this.eths,
      this.moc,
      this.xusd,
      this.fish,
      this.bnbs,
      this.rif,
      this.mynt,
      this.swapNetwork
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
