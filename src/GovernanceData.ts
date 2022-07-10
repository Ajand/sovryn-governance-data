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
import LoanToken from "./Contracts/LoanToken/LoanToken";
import LoanTokenLogicStandard from "./Contracts/LoanTokenLogicStandard/LoanTokenLogicStandard";
import LoanTokenSettingsLowerAdmin from "./Contracts/LoanTokenSettingLowerAdmin/LoanTokenSettingLowerAdmin";
import Staking from "./Contracts/Staking/Staking";
import StakingRewards from "./Contracts/StakingRewards/StakingRewards";
import VestingRegistry from "./Contracts/VestingRegistry/VestingRegistry";
import LockedSOV from "./Contracts/LockedSOV/LockedSOV";

// This is going to be the main entry of the package
// Everything we need will be returned by an instance of this
class GovernanceData {
  version = 1.27;

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
  mocPriceFeed: General;
  sovPriceFeed: General;
  ethsPriceFeed: General;
  bnbsPriceFeed: General;
  xusdPriceFeed: General;
  fishPriceFeed: General;
  rifPriceFeed: General;
  myntPriceFeed: General;

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
  rbtcWrapperForAmm: General;
  ///
  docSwapConverter: General;
  docDocPoolShareToken: General;
  docBtcPoolShareToken: General;
  ///
  usdtSwapConverter: General;
  usdtUsdtPoolShareToken: General;
  usdtBtcPoolShareToken: General;
  ///
  bproSwapConverter: General;
  bproBproPoolShareToken: General;
  bproBtcPoolShareToken: General;
  ///
  sovSwapConverter: General;
  sovPoolToken: General;
  ///
  ethSwapConverter: General;
  ethPoolToken: General;
  ///
  mocSwapConverter: General;
  mocPoolToken: General;
  ///
  bnbSwapConverter: General;
  bnbPoolToken: General;
  ///
  xusdSwapConverter: General;
  xusdPoolToken: General;
  ///
  fishSwapConverter: General;
  fishPoolToken: General;
  ///
  rifSwapConverter: General;
  rifPoolToken: General;
  ///
  myntSwapConverter: General;
  myntPoolToken: General;
  ///
  bproOracle: General;
  mocOracle: General;
  sovOracle: General;
  ethOracle: General;
  bnbOracle: General;
  xusdOracle: General;
  fishOracle: General;
  rifOracle: General;
  myntOracle: General;
  ///
  contractRegistry: General;
  converterFactory: General;
  sovrynSwapFormula: General;
  conversionPathFinder: General;
  converterUpgrader: General;
  converterRegistry: General;
  converterRegistryData: General;
  liquidTokenConverterFactory: General;
  liquidityPoolV1ConverterFactory: General;
  liquidityPoolV2ConverterFactory: General;
  liquidityPoolV2ConverterAnchorFactory: General;
  liquidityPoolV2ConverterCustomFactory: General;
  oracleWhitelist: General;
  swapSettings: General;
  ///
  exchequerMultisig: General;
  ///
  oGEarlyAccessToken: General;
  genesisCommunityTier: General;
  genesisHeroTier: General;
  genesisSuperHeroTier: General;
  ///
  bridgeRskEthEthSideBridge: General;
  bridgeRskEthEthSideFederation: General;
  bridgeRskEthEthSideMultisig: General;
  bridgeRskEthEthSideAllowToken: General;
  bridgeRskEthEthSideWeth: General;
  bridgeRskEthEthSideESov: General;
  ///
  bridgeRskEthRskSideBridge: General;
  bridgeRskEthRskSideFederation: General;
  bridgeRskEthRskSideMultisig: General;
  bridgeRskEthRskSideAllowToken: General;
  bridgeRskEthRskSideETHes: General;
  ///
  bridgeRskBscBScSideBridge: General;
  bridgeRskBscBScSideFederation: General;
  bridgeRskBscBScSideMultisig: General;
  bridgeRskBscBScSideAllowToken: General;
  bridgeRskBscBScSideWbnb: General;
  bridgeRskBscBScSideBSov: General;
  ///
  bridgeRskBSCRskSideBridge: General;
  bridgeRskBSCRskSideFederation: General;
  bridgeRskBSCRskSideMultisig: General;
  bridgeRskBSCRskSideAllowToken: General;
  bridgeRskBSCRskSideBNBbs: General;
  bridgeRskBSCRskSideETHbs: General;
  ///
  iDOCLoanToken: LoanToken;
  iDOCLoanTokenLogicProxy: General;
  ///
  iRBTCLoanToken: LoanToken;
  iRBTCLoanTokenLogicProxy: General;
  ///
  iUSDTLoanToken: LoanToken;
  iUSDTLoanTokenLogicProxy: General;
  ///
  iBPRoLoanToken: LoanToken;
  iBPRoLoanTokenLogicProxy: General;
  ///
  iXUSDLoanToken: LoanToken;
  iXUSDLoanTokenLogicProxy: General;
  ///
  LoanTokenLogicBeaconLM: General;
  LoanTokenLogicBeaconWRBTC: General;
  //
  LoanTokenLogicLM: LoanTokenLogicStandard;
  LoanTokenLogicWRBTC: LoanTokenLogicStandard;
  LoanTokenSettingsLowerAdmin: LoanTokenSettingsLowerAdmin;
  //
  Affiliates: General;
  //
  GovernanceOneNTSOV: General;
  GovernanceOneGovernor: General;
  GovernanceOneTimelock: General;
  GovernanceOneGovernorVault: General;
  GovernanceOneMultiSigKeyHolders: General;
  //
  GenesisSaleCSOVToken: General;
  GenesisSaleCrowdSale: General;
  GenesisSaleCSOV2: General;
  //
  GovernanceTwoStaking: Staking;
  StakingRewardsProxy: StakingRewards;
  VestingRegistryProxy: VestingRegistry;
  SOV: General;
  StakingImplementation: General;
  FeeSharingProxyOld: General;
  FeeSharingProxy: General;
  FeeSharingLogic: General;
  TimelockOwner: General;
  GovernorOwner: General;
  GovernorVaultOwner: General;
  TimelockAdmin: General;
  GovernorAdmin: General;
  GovernorVaultAdmin: General;
  VestingLogic: General;
  VestingRegistry: General;
  AdoptionFund: General;
  DevelopmentFund: General;
  StakingRewardsLogic: General;
  VestingCreator: General;
  ///
  FastBTCMultisig: General;
  FastBTCManagedWallet: General;
  ///
  LiquidityMiningLockedSOV: LockedSOV;
  LiquidityMining: General;
  LiquidityMiningProxy: General;
  ///
  AggregatorsXUSD: General;
  AggregatorsEths: General;
  AggregatorsBnbs: General;
  //
  MyntACL: General;
  ACLConfigurator: General;
  BalanceRedirectPresale: General;
  BancorFormula: General;
  Controller: General;
  Kernel: General;
  EVMScriptRegistryFactory: General;
  DAOFactory: General;
  MarketMaker: General;
  Reserve: General;
  TapDisabled: General;
  MyntToken: General;
  DAO: General;
  //
  Watcher: General;
  //
  SettlementProxy: General;
  //
  PerpetualManagerProxy: General;
  RbtcPaymaster: General;
  LimitOrderBookFactory: General;
  BTCUSDOracle: General;
  BTCUSDOrderbook: General;
  marginTokenAddr: General;
  //
  zero_activePool: General;
  zero_activePool_Implementation: General;
  zero_borrowerOperations: General;
  zero_borrowerOperations_Impl: General;
  zero_troveManager: General;
  zero_troveManager_Implementetion: General;
  zero_troveManagerRedeemOps: General;
  zero_collSurplusPool: General;
  zero_collSurplusPool_Impl: General;
  zero_communityIssuance: General;
  zero_communityIssuance_Impl: General;
  zero_defaultPool: General;
  zero_defaultPool_Implementation: General;
  zero_hintHelpers: General;
  zero_hintHelpers_Implementation: General;
  zero_zeroStaking: General;
  zero_zeroStaking_Implementation: General;
  zero_priceFeed: General;
  zero_priceFeed_Implementation: General;
  zero_sortedTroves: General;
  zero_sortedTroves_Implementation: General;
  zero_stabilityPool: General;
  zero_stabilityPool_Implementation: General;
  zero_gasPool: General;
  zero_liquityBaseParams: General;
  zero_liquityBaseParams_Impl: General;
  zero_feeDistributor: General;
  zero_feeDistributor_Implementation: General;
  zero_zusdToken: General;
  zero_zusdToken_Implementation: General;
  zero_zeroToken: General;
  zero_zeroToken_Implementation: General;
  zero_multiTroveGetter: General;
  zero_multiTroveGetter_Impl: General;
  ///
  BabelFisBscDevMassetProxy: General;
  BabelFisBscDevMasset: General;
  BabelFisBscDevToken: General;
  BabelFisBscDevBasketManager: General;
  BabelFisBscDevmigrations: General;

  constructor(
    localStorage: LocalStorage,
    rpcUrl: string = "https://public-node.rsk.co",
    contractsAddresses: ContractsAddresses = MainnetAddresses,
    tokenList: TokenList = MainnetTokens
  ) {
    this.localStorage = localStorage;
    this.provider = new ethers.providers.StaticJsonRpcProvider({
      url: rpcUrl,
      skipFetchSetup: true,
    });
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
    this.mocPriceFeed = new General(
      "MoC Price Feed",
      this.contractsAddresses.priceFeeds.mocPriceFeed,
      this
    );
    this.sovPriceFeed = new General(
      "SOV Price Feed",
      this.contractsAddresses.priceFeeds.sovPriceFeed,
      this
    );
    this.ethsPriceFeed = new General(
      "ETHs Price Feed",
      this.contractsAddresses.priceFeeds.ethsPriceFeed,
      this
    );
    this.bnbsPriceFeed = new General(
      "BNBs Price Feed",
      this.contractsAddresses.priceFeeds.bnbsPriceFeed,
      this
    );
    this.xusdPriceFeed = new General(
      "XUSD Price Feed",
      this.contractsAddresses.priceFeeds.xusdPriceFeed,
      this
    );
    this.fishPriceFeed = new General(
      "Fish Price Feed",
      this.contractsAddresses.priceFeeds.fishPriceFeed,
      this
    );
    this.rifPriceFeed = new General(
      "XUSD Price Feed",
      this.contractsAddresses.priceFeeds.rifPriceFeed,
      this
    );
    this.myntPriceFeed = new General(
      "Mynt Price Feed",
      this.contractsAddresses.priceFeeds.myntPriceFeed,
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
    this.rbtcWrapperForAmm = new General(
      "RBTC Wrapper for AMM ",
      this.contractsAddresses.swaps.general.rbtcWrapperForAmm,
      this
    );
    this.docSwapConverter = new General(
      "DoC Swap Converter",
      this.contractsAddresses.swaps.doc.converter,
      this
    );
    this.docDocPoolShareToken = new General(
      "DoC DoC Pool Share Token",
      this.contractsAddresses.swaps.doc.docPool,
      this
    );
    this.docBtcPoolShareToken = new General(
      "DoC BTC Pool Share Token",
      this.contractsAddresses.swaps.doc.btcPool,
      this
    );

    this.usdtSwapConverter = new General(
      "USDT Swap Converter",
      this.contractsAddresses.swaps.usdt.converter,
      this
    );
    this.usdtUsdtPoolShareToken = new General(
      "USDT USDT Pool Share Token",
      this.contractsAddresses.swaps.usdt.usdtPool,
      this
    );
    this.usdtBtcPoolShareToken = new General(
      "USDT BTC Pool Share Token",
      this.contractsAddresses.swaps.usdt.btcPool,
      this
    );

    this.bproSwapConverter = new General(
      "BPro Swap Converter",
      this.contractsAddresses.swaps.bpro.converter,
      this
    );
    this.bproBproPoolShareToken = new General(
      "BPro BPro Pool Share Token",
      this.contractsAddresses.swaps.bpro.bproPool,
      this
    );
    this.bproBtcPoolShareToken = new General(
      "BPro BTC Pool Share Token",
      this.contractsAddresses.swaps.bpro.btcPool,
      this
    );

    this.sovSwapConverter = new General(
      "SOV Swap Converter",
      this.contractsAddresses.swaps.sov.converter,
      this
    );
    this.sovPoolToken = new General(
      "SOV Pool Share Token",
      this.contractsAddresses.swaps.sov.pool,
      this
    );

    this.ethSwapConverter = new General(
      "ETH Swap Converter",
      this.contractsAddresses.swaps.eth.converter,
      this
    );
    this.ethPoolToken = new General(
      "ETH Pool Share Token",
      this.contractsAddresses.swaps.eth.pool,
      this
    );

    this.mocSwapConverter = new General(
      "MoC Swap Converter",
      this.contractsAddresses.swaps.moc.converter,
      this
    );
    this.mocPoolToken = new General(
      "MoC Pool Share Token",
      this.contractsAddresses.swaps.moc.pool,
      this
    );

    this.bnbSwapConverter = new General(
      "BNB Swap Converter",
      this.contractsAddresses.swaps.bnb.converter,
      this
    );
    this.bnbPoolToken = new General(
      "BNB Pool Share Token",
      this.contractsAddresses.swaps.bnb.pool,
      this
    );

    this.xusdSwapConverter = new General(
      "XUSD Swap Converter",
      this.contractsAddresses.swaps.xusd.converter,
      this
    );
    this.xusdPoolToken = new General(
      "XUSD Pool Share Token",
      this.contractsAddresses.swaps.xusd.pool,
      this
    );

    this.fishSwapConverter = new General(
      "FISH Swap Converter",
      this.contractsAddresses.swaps.fish.converter,
      this
    );
    this.fishPoolToken = new General(
      "FISH Pool Share Token",
      this.contractsAddresses.swaps.fish.pool,
      this
    );

    this.rifSwapConverter = new General(
      "RIF Swap Converter",
      this.contractsAddresses.swaps.rif.converter,
      this
    );
    this.rifPoolToken = new General(
      "RIF Pool Share Token",
      this.contractsAddresses.swaps.rif.pool,
      this
    );

    this.myntSwapConverter = new General(
      "MYNT Swap Converter",
      this.contractsAddresses.swaps.mynt.converter,
      this
    );
    this.myntPoolToken = new General(
      "MYNT Pool Share Token",
      this.contractsAddresses.swaps.mynt.pool,
      this
    );

    this.bproOracle = new General(
      "BPro Oracle",
      this.contractsAddresses.swaps.oracles.bpro,
      this
    );
    this.mocOracle = new General(
      "MOC Oracle",
      this.contractsAddresses.swaps.oracles.moc,
      this
    );
    this.sovOracle = new General(
      "SOV Oracle",
      this.contractsAddresses.swaps.oracles.sov,
      this
    );
    this.ethOracle = new General(
      "ETH Oracle",
      this.contractsAddresses.swaps.oracles.eth,
      this
    );
    this.bnbOracle = new General(
      "BNB Oracle",
      this.contractsAddresses.swaps.oracles.bnb,
      this
    );
    this.xusdOracle = new General(
      "XUSD Oracle",
      this.contractsAddresses.swaps.oracles.xusd,
      this
    );
    this.fishOracle = new General(
      "FISH Oracle",
      this.contractsAddresses.swaps.oracles.fish,
      this
    );
    this.rifOracle = new General(
      "RIF Oracle",
      this.contractsAddresses.swaps.oracles.rif,
      this
    );
    this.myntOracle = new General(
      "MYNT Oracle",
      this.contractsAddresses.swaps.oracles.mynt,
      this
    );
    ///
    this.contractRegistry = new General(
      "Contract Registry",
      this.contractsAddresses.swaps.misc.contractRegistry,
      this
    );
    this.converterFactory = new General(
      "Converter Factory",
      this.contractsAddresses.swaps.misc.converterFactory,
      this
    );
    this.sovrynSwapFormula = new General(
      "Sovryn Swap Formula",
      this.contractsAddresses.swaps.misc.sovrynSwapFormula,
      this
    );
    this.conversionPathFinder = new General(
      "Conversion Path Finder",
      this.contractsAddresses.swaps.misc.conversionPathFinder,
      this
    );
    this.converterUpgrader = new General(
      "Converter Upgrader",
      this.contractsAddresses.swaps.misc.converterUpgrader,
      this
    );
    this.converterRegistry = new General(
      "Converter Registry",
      this.contractsAddresses.swaps.misc.converterRegistry,
      this
    );
    this.converterRegistryData = new General(
      "Converter Registry Data",
      this.contractsAddresses.swaps.misc.converterRegistryData,
      this
    );
    this.liquidTokenConverterFactory = new General(
      "Liquid Token Converter Factory",
      this.contractsAddresses.swaps.misc.liquidTokenConverterFactory,
      this
    );
    this.liquidityPoolV1ConverterFactory = new General(
      "Liquid Token Converter Factory",
      this.contractsAddresses.swaps.misc.liquidityPoolV1ConverterFactory,
      this
    );
    this.liquidityPoolV2ConverterFactory = new General(
      "Liquidity Pool V2 Converter Factory",
      this.contractsAddresses.swaps.misc.liquidityPoolV2ConverterFactory,
      this
    );
    this.liquidityPoolV2ConverterAnchorFactory = new General(
      "Liquidity Pool V2 Converter Anchor Factory",
      this.contractsAddresses.swaps.misc.liquidityPoolV2ConverterAnchorFactory,
      this
    );
    this.liquidityPoolV2ConverterCustomFactory = new General(
      "Liquidity Pool V2 Converter Custom Factory",
      this.contractsAddresses.swaps.misc.liquidityPoolV2ConverterCustomFactory,
      this
    );
    this.oracleWhitelist = new General(
      "Oracle Whitelist",
      this.contractsAddresses.swaps.misc.oracleWhitelist,
      this
    );
    this.swapSettings = new General(
      "Swap Settings",
      this.contractsAddresses.swaps.misc.swapSettings,
      this
    );
    ///
    this.exchequerMultisig = new General(
      "Exchequer Multisig",
      this.contractsAddresses.multisig.exchequerMultisig,
      this
    );
    ///
    this.oGEarlyAccessToken = new General(
      "OG EarlyAccessToken",
      this.contractsAddresses.nfts.oGEarlyAccessToken,
      this
    );
    this.genesisCommunityTier = new General(
      "Genesis Community Tier",
      this.contractsAddresses.nfts.genesisCommunityTier,
      this
    );
    this.genesisHeroTier = new General(
      "Genesis Hero Tier",
      this.contractsAddresses.nfts.genesisHeroTier,
      this
    );
    this.genesisSuperHeroTier = new General(
      "Genesis Super Hero Tier",
      this.contractsAddresses.nfts.genesisHeroTier,
      this
    );
    ///
    this.bridgeRskEthEthSideBridge = new General(
      "Bridge ETH-RSK, ETH SIDE Bridge",
      this.contractsAddresses.bridges.ethRsk.ethSide.bridge,
      this
    );
    this.bridgeRskEthEthSideFederation = new General(
      "Bridge ETH-RSK, ETH SIDE Federation",
      this.contractsAddresses.bridges.ethRsk.ethSide.federation,
      this
    );
    this.bridgeRskEthEthSideMultisig = new General(
      "Bridge ETH-RSK, ETH SIDE MultiSig",
      this.contractsAddresses.bridges.ethRsk.ethSide.multisig,
      this
    );
    this.bridgeRskEthEthSideAllowToken = new General(
      "Bridge ETH-RSK, ETH SIDE Allow Tokens",
      this.contractsAddresses.bridges.ethRsk.ethSide.allowToken,
      this
    );
    this.bridgeRskEthEthSideWeth = new General(
      "Bridge ETH-RSK, ETH SIDE Weth",
      this.contractsAddresses.bridges.ethRsk.ethSide.weth,
      this
    );
    this.bridgeRskEthEthSideESov = new General(
      "Bridge ETH-RSK, ETH SIDE ESov",
      this.contractsAddresses.bridges.ethRsk.ethSide.eSov,
      this
    );
    ///
    this.bridgeRskEthRskSideBridge = new General(
      "Bridge ETH-RSK, RSK SIDE Bridge",
      this.contractsAddresses.bridges.ethRsk.rskSide.bridge,
      this
    );
    this.bridgeRskEthRskSideFederation = new General(
      "Bridge ETH-RSK, RSK SIDE Federation",
      this.contractsAddresses.bridges.ethRsk.rskSide.federation,
      this
    );
    this.bridgeRskEthRskSideMultisig = new General(
      "Bridge ETH-RSK, RSK SIDE MultiSig",
      this.contractsAddresses.bridges.ethRsk.rskSide.multisig,
      this
    );
    this.bridgeRskEthRskSideAllowToken = new General(
      "Bridge ETH-RSK, RSK SIDE Allow Tokens",
      this.contractsAddresses.bridges.ethRsk.rskSide.allowToken,
      this
    );
    this.bridgeRskEthRskSideETHes = new General(
      "Bridge ETH-RSK, RSK SIDE Weth",
      this.contractsAddresses.bridges.ethRsk.rskSide.ethes,
      this
    );
    ///
    this.bridgeRskBscBScSideBridge = new General(
      "Bridge BSC-RSK, BSC SIDE Bridge",
      this.contractsAddresses.bridges.bscRsk.bscSide.bridge,
      this
    );
    this.bridgeRskBscBScSideFederation = new General(
      "Bridge BSC-RSK, BSC SIDE Federation",
      this.contractsAddresses.bridges.bscRsk.bscSide.federation,
      this
    );
    this.bridgeRskBscBScSideMultisig = new General(
      "Bridge BSC-RSK, BSC SIDE MultiSig",
      this.contractsAddresses.bridges.bscRsk.bscSide.multisig,
      this
    );
    this.bridgeRskBscBScSideAllowToken = new General(
      "Bridge BSC-RSK, BSC SIDE Allow Tokens",
      this.contractsAddresses.bridges.bscRsk.bscSide.allowToken,
      this
    );
    this.bridgeRskBscBScSideWbnb = new General(
      "Bridge BSC-RSK, BSC SIDE WBNB",
      this.contractsAddresses.bridges.bscRsk.bscSide.wbnb,
      this
    );
    this.bridgeRskBscBScSideBSov = new General(
      "Bridge BSC-RSK, BSC SIDE BSov",
      this.contractsAddresses.bridges.bscRsk.bscSide.bsov,
      this
    );
    ///
    this.bridgeRskBSCRskSideBridge = new General(
      "Bridge BSC-RSK, RSK SIDE Bridge",
      this.contractsAddresses.bridges.bscRsk.rskSide.bridge,
      this
    );
    this.bridgeRskBSCRskSideFederation = new General(
      "Bridge BSC-RSK, RSK SIDE Federation",
      this.contractsAddresses.bridges.bscRsk.rskSide.federation,
      this
    );
    this.bridgeRskBSCRskSideMultisig = new General(
      "Bridge BSC-RSK, RSK SIDE MultiSig",
      this.contractsAddresses.bridges.bscRsk.rskSide.multisig,
      this
    );
    this.bridgeRskBSCRskSideAllowToken = new General(
      "Bridge BSC-RSK, RSK SIDE Allow Tokens",
      this.contractsAddresses.bridges.bscRsk.rskSide.allowToken,
      this
    );
    this.bridgeRskBSCRskSideBNBbs = new General(
      "Bridge BSC-RSK, RSK SIDE BNBbs",
      this.contractsAddresses.bridges.bscRsk.rskSide.bnbs,
      this
    );
    this.bridgeRskBSCRskSideETHbs = new General(
      "Bridge BSC-RSK, RSK SIDE ETHbs",
      this.contractsAddresses.bridges.bscRsk.rskSide.ethbs,
      this
    );
    //
    this.iDOCLoanToken = new LoanToken(
      "iDOC Loan Token",
      this.contractsAddresses.loan.iDOC.loanToken,
      this,
      this.contractsAddresses.loan.iDOC.loanTokenLogicProxy
    );
    this.iDOCLoanTokenLogicProxy = new General(
      "iDOC Loan Token Logic Proxy",
      this.contractsAddresses.loan.iDOC.loanTokenLogicProxy,
      this
    );
    //
    this.iRBTCLoanToken = new LoanToken(
      "iRBTC Loan Token",
      this.contractsAddresses.loan.iRBTC.loanToken,
      this,
      this.contractsAddresses.loan.iRBTC.loanTokenLogicProxy
    );
    this.iRBTCLoanTokenLogicProxy = new General(
      "iRBTC Loan Token Logic Proxy",
      this.contractsAddresses.loan.iRBTC.loanTokenLogicProxy,
      this
    );
    //
    this.iUSDTLoanToken = new LoanToken(
      "iUSDT Loan Token",
      this.contractsAddresses.loan.iUSDT.loanToken,
      this,
      this.contractsAddresses.loan.iUSDT.loanTokenLogicProxy
    );
    this.iUSDTLoanTokenLogicProxy = new General(
      "iUSDT Loan Token Logic Proxy",
      this.contractsAddresses.loan.iUSDT.loanTokenLogicProxy,
      this
    );
    //
    this.iBPRoLoanToken = new LoanToken(
      "iBPRo Loan Token",
      this.contractsAddresses.loan.iBPRo.loanToken,
      this,
      this.contractsAddresses.loan.iBPRo.loanTokenLogicProxy
    );
    this.iBPRoLoanTokenLogicProxy = new General(
      "iBPRo Loan Token Logic Proxy",
      this.contractsAddresses.loan.iBPRo.loanTokenLogicProxy,
      this
    );
    //
    this.iXUSDLoanToken = new LoanToken(
      "iXUSD Loan Token",
      this.contractsAddresses.loan.iXUSD.loanToken,
      this,
      this.contractsAddresses.loan.iXUSD.loanTokenLogicProxy
    );
    this.iXUSDLoanTokenLogicProxy = new General(
      "iXUSD Loan Token Logic Proxy",
      this.contractsAddresses.loan.iXUSD.loanTokenLogicProxy,
      this
    );
    //
    this.LoanTokenLogicBeaconLM = new General(
      "Loan Token Logic Beacon LM",
      this.contractsAddresses.loan.loanTokenLogicBeacon.loanTokenLogicBeaconLM,
      this
    );
    this.LoanTokenLogicBeaconWRBTC = new General(
      "Loan Token Logic Beacon WRBTC",
      this.contractsAddresses.loan.loanTokenLogicBeacon.loanTokenLogicBeaconWRBTC,
      this
    );
    //
    this.LoanTokenLogicLM = new LoanTokenLogicStandard(
      "Loan Token Logic LM",
      this.contractsAddresses.loan.loanTokenLogicModule.loanTokenLogicLM,
      this
    );
    this.LoanTokenLogicWRBTC = new LoanTokenLogicStandard(
      "Loan Token Logic WRBTC",
      this.contractsAddresses.loan.loanTokenLogicModule.loanTokenLogicWRBTC,
      this
    );
    this.LoanTokenSettingsLowerAdmin = new LoanTokenSettingsLowerAdmin(
      "Loan Token Settings Lower Admin",
      this.contractsAddresses.loan.loanTokenLogicModule.loanTokenSettingsLowerAdmin,
      this
    );
    //
    this.Affiliates = new General(
      "Affiliates",
      this.contractsAddresses.loan.affiliates,
      this
    );
    //
    this.GovernanceOneNTSOV = new General(
      "Governance 1.0 NTSOV",
      this.contractsAddresses.governance1.NTSOV,
      this
    );
    this.GovernanceOneGovernor = new General(
      "Governance 1.0 Governor",
      this.contractsAddresses.governance1.governor,
      this
    );
    this.GovernanceOneTimelock = new General(
      "Governance 1.0 Timelock",
      this.contractsAddresses.governance1.timelock,
      this
    );
    this.GovernanceOneGovernorVault = new General(
      "Governance 1.0 Governor Vault",
      this.contractsAddresses.governance1.governorVault,
      this
    );
    this.GovernanceOneMultiSigKeyHolders = new General(
      "Governance 1.0 MultiSig Key Holders",
      this.contractsAddresses.governance1.MultiSigKeyHolders,
      this
    );
    ///
    this.GenesisSaleCSOVToken = new General(
      "Genesis Sale CSOV Token",
      this.contractsAddresses.genesisSale.CSOVToken,
      this
    );
    this.GenesisSaleCrowdSale = new General(
      "Genesis Sale Crowd Sale",
      this.contractsAddresses.genesisSale.CrowdSale,
      this
    );
    this.GenesisSaleCSOV2 = new General(
      "Genesis Sale CSOV2",
      this.contractsAddresses.genesisSale.CSOV2,
      this
    );
    ///
    this.GovernanceTwoStaking = new Staking(
      "Governance 2.0 Staking",
      this.contractsAddresses.governance2.Staking,
      this
    );
    this.StakingRewardsProxy = new StakingRewards(
      "Governance 2.0 Staking Rewards Proxy",
      this.contractsAddresses.governance2.StakingRewardsProxy,
      this
    );
    this.VestingRegistryProxy = new VestingRegistry(
      "Governance 2.0 Vesting Registry Proxy",
      this.contractsAddresses.governance2.VestingRegistryProxy,
      this
    );

    this.SOV = new General(
      "Governance 2.0 SOV",
      this.contractsAddresses.governance2.SOV,
      this
    );
    this.StakingImplementation = new General(
      "Governance 2.0 Staking Implementation",
      this.contractsAddresses.governance2.StakingImplementation,
      this
    );
    this.FeeSharingProxyOld = new General(
      "Governance 2.0 Fee Sharing ProxyOld",
      this.contractsAddresses.governance2.FeeSharingProxyOld,
      this
    );
    this.FeeSharingProxy = new General(
      "Governance 2.0 Fee Sharing Proxy",
      this.contractsAddresses.governance2.FeeSharingProxy,
      this
    );
    this.FeeSharingLogic = new General(
      "Governance 2.0 Fee Sharing Logic",
      this.contractsAddresses.governance2.FeeSharingLogic,
      this
    );
    this.TimelockOwner = new General(
      "Governance 2.0 Timelock Owner",
      this.contractsAddresses.governance2.TimelockOwner,
      this
    );
    this.GovernorOwner = new General(
      "Governance 2.0 Governor Owner",
      this.contractsAddresses.governance2.GovernorOwner,
      this
    );
    this.GovernorVaultOwner = new General(
      "Governance 2.0 Governor Vault Owner",
      this.contractsAddresses.governance2.GovernorVaultOwner,
      this
    );
    this.TimelockAdmin = new General(
      "Governance 2.0 Timelock Admin",
      this.contractsAddresses.governance2.TimelockAdmin,
      this
    );
    this.GovernorAdmin = new General(
      "Governance 2.0 Governor Admin",
      this.contractsAddresses.governance2.GovernorAdmin,
      this
    );
    this.GovernorVaultAdmin = new General(
      "Governance 2.0 Governor Vault Admin",
      this.contractsAddresses.governance2.GovernorVaultAdmin,
      this
    );
    this.VestingLogic = new General(
      "Governance 2.0 Vesting Logic",
      this.contractsAddresses.governance2.VestingLogic,
      this
    );
    this.VestingRegistry = new General(
      "Governance 2.0 Vesting Registry",
      this.contractsAddresses.governance2.VestingRegistry,
      this
    );
    this.GovernorVaultAdmin = new General(
      "Governance 2.0 GovernorVaultAdmin",
      this.contractsAddresses.governance2.GovernorVaultAdmin,
      this
    );
    this.VestingLogic = new General(
      "Governance 2.0 Vesting Logic",
      this.contractsAddresses.governance2.VestingLogic,
      this
    );

    this.VestingRegistry = new General(
      "Governance 2.0 Vesting Registry",
      this.contractsAddresses.governance2.VestingRegistry,
      this
    );

    this.AdoptionFund = new General(
      "Governance 2.0 Adoption Fund",
      this.contractsAddresses.governance2.AdoptionFund,
      this
    );
    this.DevelopmentFund = new General(
      "Governance 2.0 Development Fund",
      this.contractsAddresses.governance2.DevelopmentFund,
      this
    );
    this.StakingRewardsLogic = new General(
      "Governance 2.0 Staking Rewards Logic",
      this.contractsAddresses.governance2.StakingRewardsLogic,
      this
    );
    this.VestingCreator = new General(
      "Governance 2.0 Staking Vesting Creator",
      this.contractsAddresses.governance2.VestingCreator,
      this
    );
    ///
    this.FastBTCMultisig = new General(
      "FastBTC Multisig",
      this.contractsAddresses.fastBTC.Multisig,
      this
    );
    this.FastBTCManagedWallet = new General(
      "FastBTC ManagedWallet",
      this.contractsAddresses.fastBTC.ManagedWallet,
      this
    );
    //
    this.LiquidityMiningLockedSOV = new LockedSOV(
      "Liquidity Mining Locked SOV",
      this.contractsAddresses.LiquidityMining.LockedSOV,
      this
    );
    this.LiquidityMining = new General(
      "Liquidity Mining Logic",
      this.contractsAddresses.LiquidityMining.LiquidityMining,
      this
    );
    this.LiquidityMiningProxy = new General(
      "Liquidity Mining Proxy",
      this.contractsAddresses.LiquidityMining.LiquidityMiningProxy,
      this
    );
    //
    this.AggregatorsXUSD = new General(
      "Aggregators XUSD",
      this.contractsAddresses.aggregators.xusd,
      this
    );
    this.AggregatorsEths = new General(
      "Aggregators ETHs",
      this.contractsAddresses.aggregators.eths,
      this
    );
    this.AggregatorsBnbs = new General(
      "Aggregators BNBs",
      this.contractsAddresses.aggregators.bnbs,
      this
    );
    //
    this.MyntACL = new General(
      "Mynt ACL",
      this.contractsAddresses.Mynt.ACL,
      this
    );
    this.ACLConfigurator = new General(
      "Mynt ACL Configurator",
      this.contractsAddresses.Mynt.ACLConfigurator,
      this
    );
    this.BalanceRedirectPresale = new General(
      "Mynt Balance Redirect Presale",
      this.contractsAddresses.Mynt.BalanceRedirectPresale,
      this
    );
    this.BancorFormula = new General(
      "Mynt Bancor Formula",
      this.contractsAddresses.Mynt.BancorFormula,
      this
    );
    this.Controller = new General(
      "Mynt Controller",
      this.contractsAddresses.Mynt.Controller,
      this
    );
    this.Kernel = new General(
      "Mynt Kernel",
      this.contractsAddresses.Mynt.Kernel,
      this
    );
    this.EVMScriptRegistryFactory = new General(
      "Mynt EVM Script Registry Factory",
      this.contractsAddresses.Mynt.EVMScriptRegistryFactory,
      this
    );
    this.DAOFactory = new General(
      "Mynt DAO Factory",
      this.contractsAddresses.Mynt.DAOFactory,
      this
    );
    this.MarketMaker = new General(
      "Mynt Market Maker",
      this.contractsAddresses.Mynt.MarketMaker,
      this
    );
    this.Reserve = new General(
      "Mynt Reserve",
      this.contractsAddresses.Mynt.Reserve,
      this
    );
    this.TapDisabled = new General(
      "Mynt Tap Disabled",
      this.contractsAddresses.Mynt.TapDisabled,
      this
    );
    this.MyntToken = new General(
      "Mynt Token",
      this.contractsAddresses.Mynt.MyntToken,
      this
    );
    this.DAO = new General("Mynt DAO", this.contractsAddresses.Mynt.DAO, this);
    ///
    this.Watcher = new General(
      "Watcher",
      this.contractsAddresses.misc.watcher,
      this
    );
    ///
    this.SettlementProxy = new General(
      "Limit Order Settlement Proxy",
      this.contractsAddresses.LimitOrder.SettlementProxy,
      this
    );
    //
    this.PerpetualManagerProxy = new General(
      "Perpetual Manager Proxy",
      this.contractsAddresses.PrepetualFutures.PerpetualManagerProxy,
      this
    );
    this.RbtcPaymaster = new General(
      "Rbtc Paymaster",
      this.contractsAddresses.PrepetualFutures.RbtcPaymaster,
      this
    );
    this.LimitOrderBookFactory = new General(
      "Limit Order Book Factory",
      this.contractsAddresses.PrepetualFutures.LimitOrderBookFactory,
      this
    );
    this.BTCUSDOracle = new General(
      "BTC-USD Oracle",
      this.contractsAddresses.PrepetualFutures.BTCUSDOracle,
      this
    );
    this.BTCUSDOrderbook = new General(
      "BTC-USD Order Book",
      this.contractsAddresses.PrepetualFutures.BTCUSDOrderbook,
      this
    );
    this.marginTokenAddr = new General(
      "Margin Token Address",
      this.contractsAddresses.PrepetualFutures.marginTokenAddr,
      this
    );
    //
    this.zero_activePool = new General(
      "Zero Active Pool",
      this.contractsAddresses.zero.activePool,
      this
    );
    this.zero_activePool_Implementation = new General(
      "Zero Active Pool Implementation",
      this.contractsAddresses.zero.activePool_Implementation,
      this
    );
    this.zero_borrowerOperations = new General(
      "Zero Borrower Operations",
      this.contractsAddresses.zero.borrowerOperations,
      this
    );
    this.zero_borrowerOperations_Impl = new General(
      "Zero Borrower Operations Implementation",
      this.contractsAddresses.zero.borrowerOperations_Impl,
      this
    );
    this.zero_troveManager = new General(
      "Zero Trove Manager",
      this.contractsAddresses.zero.troveManager,
      this
    );
    this.zero_troveManager_Implementetion = new General(
      "Zero Trove Manager Implementation",
      this.contractsAddresses.zero.troveManager_Implementetion,
      this
    );
    this.zero_troveManagerRedeemOps = new General(
      "Zero Trove Manager Redeem Ops",
      this.contractsAddresses.zero.troveManagerRedeemOps,
      this
    );
    this.zero_collSurplusPool = new General(
      "Zero Coll Surplus Pool",
      this.contractsAddresses.zero.collSurplusPool,
      this
    );
    this.zero_collSurplusPool_Impl = new General(
      "Zero Coll Surplus Pool Implementation",
      this.contractsAddresses.zero.collSurplusPool_Impl,
      this
    );
    this.zero_communityIssuance = new General(
      "Zero Community Issuance",
      this.contractsAddresses.zero.communityIssuance,
      this
    );
    this.zero_communityIssuance_Impl = new General(
      "Zero Community Issuance Implementation",
      this.contractsAddresses.zero.communityIssuance_Impl,
      this
    );
    this.zero_defaultPool = new General(
      "Zero Default Pool",
      this.contractsAddresses.zero.defaultPool,
      this
    );
    this.zero_hintHelpers = new General(
      "Zero Hint Helpers",
      this.contractsAddresses.zero.hintHelpers,
      this
    );
    this.zero_hintHelpers_Implementation = new General(
      "Zero Hint Helpers Implementation",
      this.contractsAddresses.zero.hintHelpers_Implementation,
      this
    );
    this.zero_zeroStaking = new General(
      "Zero Staking",
      this.contractsAddresses.zero.zeroStaking,
      this
    );
    this.zero_zeroStaking_Implementation = new General(
      "Zero Staking Implementation",
      this.contractsAddresses.zero.zeroStaking_Implementation,
      this
    );
    this.zero_priceFeed = new General(
      "Zero PriceFeed",
      this.contractsAddresses.zero.priceFeed,
      this
    );
    this.zero_priceFeed_Implementation = new General(
      "Zero PriceFeed Implementation",
      this.contractsAddresses.zero.priceFeed_Implementation,
      this
    );
    this.zero_sortedTroves = new General(
      "Zero Sorted Troves",
      this.contractsAddresses.zero.sortedTroves,
      this
    );
    this.zero_sortedTroves_Implementation = new General(
      "Zero Sorted Troves Implementation",
      this.contractsAddresses.zero.sortedTroves_Implementation,
      this
    );
    this.zero_stabilityPool = new General(
      "Zero Stability Pool",
      this.contractsAddresses.zero.stabilityPool,
      this
    );

    this.zero_stabilityPool_Implementation = new General(
      "Zero Stability Pool Implementation",
      this.contractsAddresses.zero.stabilityPool_Implementation,
      this
    );
    this.zero_gasPool = new General(
      "Zero Gas Pool",
      this.contractsAddresses.zero.gasPool,
      this
    );
    this.zero_liquityBaseParams = new General(
      "Zero Liquity Base Params",
      this.contractsAddresses.zero.liquityBaseParams,
      this
    );

    this.zero_feeDistributor = new General(
      "Zero Fee Distributor",
      this.contractsAddresses.zero.feeDistributor,
      this
    );
    this.zero_feeDistributor_Implementation = new General(
      "Zero Fee Distributor Implementation",
      this.contractsAddresses.zero.feeDistributor_Implementation,
      this
    );
    this.zero_zusdToken = new General(
      "ZUSD Token",
      this.contractsAddresses.zero.zusdToken,
      this
    );
    this.zero_zusdToken_Implementation = new General(
      "ZUSD Token  Implementation",
      this.contractsAddresses.zero.zusdToken_Implementation,
      this
    );

    this.zero_zeroToken = new General(
      "Zero Token",
      this.contractsAddresses.zero.zeroToken,
      this
    );
    this.zero_zeroToken_Implementation = new General(
      "Zero Token Implementation",
      this.contractsAddresses.zero.zeroToken_Implementation,
      this
    );
    this.zero_multiTroveGetter = new General(
      "Zero Multi Trove Getter",
      this.contractsAddresses.zero.multiTroveGetter,
      this
    );
    this.zero_multiTroveGetter_Impl = new General(
      "Zero Multi Trove Getter Implementation",
      this.contractsAddresses.zero.multiTroveGetter_Impl,
      this
    );
    ///
    this.BabelFisBscDevMassetProxy = new General(
      "Babel-Fis Bsc-Dev Masset Proxy",
      this.contractsAddresses.BabelFisBscDev.MassetProxy,
      this
    );
    this.BabelFisBscDevMasset = new General(
      "Babel-Fis Bsc-Dev Masset",
      this.contractsAddresses.BabelFisBscDev.Masset,
      this
    );
    this.BabelFisBscDevToken = new General(
      "Babel-Fis Bsc-Dev Token",
      this.contractsAddresses.BabelFisBscDev.Token,
      this
    );
    this.BabelFisBscDevBasketManager = new General(
      "Babel-Fis Bsc-Dev Basket Manager",
      this.contractsAddresses.BabelFisBscDev.BasketManager,
      this
    );
    this.BabelFisBscDevmigrations = new General(
      "Babel-Fis Bsc-Dev Migrations",
      this.contractsAddresses.BabelFisBscDev.migrations,
      this
    );
  }

  getData() {
    return {
      version: this.version,
      categories: [
        {
          categoryName: "Marginal Trading Protocol",
          contracts: [
            this.sovryn,
            this.priceFeeds,
            this.swapsImp,
            this.protocolSettings,
            this.loanSettings,
            this.loanOpening,
            this.loanMaintenance,
            this.loanClosingLiquidation,
            this.loanClosingRollover,
            this.loanClosingWith,
            this.loanClosingBase,
            this.swapExternal,
            this.Affiliates,
          ],
        },
        {
          categoryName: "Tokens",
          contracts: [
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
          ],
        },
        {
          categoryName: "Loan",
          contracts: [
            this.iDOCLoanToken,
            this.iDOCLoanTokenLogicProxy,
            this.iRBTCLoanToken,
            this.iRBTCLoanTokenLogicProxy,
            this.iUSDTLoanToken,
            this.iUSDTLoanTokenLogicProxy,
            this.iBPRoLoanToken,
            this.iBPRoLoanTokenLogicProxy,
            this.iXUSDLoanToken,
            this.iXUSDLoanTokenLogicProxy,
            this.LoanTokenLogicBeaconLM,
            this.LoanTokenLogicBeaconWRBTC,
            this.LoanTokenLogicLM,
            this.LoanTokenLogicWRBTC,
            this.LoanTokenSettingsLowerAdmin,
          ],
        },
        {
          categoryName: "Swap",
          contracts: [
            this.swapNetwork,
            this.rbtcWrapperForAmm,
            this.docSwapConverter,
            this.docDocPoolShareToken,
            this.docBtcPoolShareToken,
            this.usdtSwapConverter,
            this.usdtUsdtPoolShareToken,
            this.usdtBtcPoolShareToken,
            this.bproSwapConverter,
            this.bproBproPoolShareToken,
            this.bproBtcPoolShareToken,
            this.sovSwapConverter,
            this.sovPoolToken,
            this.ethSwapConverter,
            this.ethPoolToken,
            this.mocSwapConverter,
            this.mocPoolToken,
            this.bnbSwapConverter,
            this.bnbPoolToken,
            this.xusdSwapConverter,
            this.xusdPoolToken,
            this.fishSwapConverter,
            this.fishPoolToken,
            this.rifSwapConverter,
            this.rifPoolToken,
            this.myntSwapConverter,
            this.myntPoolToken,
            this.bproOracle,
            this.mocOracle,
            this.sovOracle,
            this.ethOracle,
            this.bnbOracle,
            this.xusdOracle,
            this.fishOracle,
            this.rifOracle,
            this.myntOracle,
            this.contractRegistry,
            this.converterFactory,
            this.sovrynSwapFormula,
            this.conversionPathFinder,
            this.converterUpgrader,
            this.converterRegistry,
            this.converterRegistryData,
            this.liquidTokenConverterFactory,
            this.liquidityPoolV1ConverterFactory,
            this.liquidityPoolV2ConverterFactory,
            this.liquidityPoolV2ConverterAnchorFactory,
            this.liquidityPoolV2ConverterCustomFactory,
            this.oracleWhitelist,
            this.swapSettings,
          ],
        },
        {
          categoryName: "Price Feeds",
          contracts: [
            this.priceFeedsMoC,
            this.usdtPriceFeed,
            this.bProPriceFeed,
            this.priceFeedRSKOracle,
            this.mocPriceFeed,
            this.sovPriceFeed,
            this.ethsPriceFeed,
            this.bnbsPriceFeed,
            this.xusdPriceFeed,
            this.fishPriceFeed,
            this.rifPriceFeed,
            this.myntPriceFeed,
            this.mocState,
          ],
        },
        {
          categoryName: "Multisig",
          contracts: [this.exchequerMultisig],
        },
        {
          categoryName: "NFTs",
          contracts: [
            this.oGEarlyAccessToken,
            this.genesisCommunityTier,
            this.genesisHeroTier,
            this.genesisSuperHeroTier,
          ],
        },
        {
          categoryName: "Governance 1.0",
          contracts: [
            this.GovernanceOneNTSOV,
            this.GovernanceOneGovernor,
            this.GovernanceOneTimelock,
            this.GovernanceOneGovernorVault,
            this.GovernanceOneMultiSigKeyHolders,
          ],
        },
        {
          categoryName: "Genesis Sale",
          contracts: [
            this.GenesisSaleCSOVToken,
            this.GenesisSaleCrowdSale,
            this.GenesisSaleCSOV2,
          ],
        },
        {
          categoryName: "Governance 2.0",
          contracts: [
            this.SOV,
            this.GovernanceTwoStaking,
            this.StakingImplementation,
            this.FeeSharingProxyOld,
            this.FeeSharingProxy,
            this.TimelockOwner,
            this.GovernorOwner,
            this.GovernorVaultOwner,
            this.TimelockAdmin,
            this.GovernorAdmin,
            this.GovernorVaultAdmin,
            this.VestingLogic,
            this.VestingRegistry,
            this.AdoptionFund,
            this.DevelopmentFund,
            this.StakingRewardsProxy,
            this.StakingRewardsLogic,
            this.VestingRegistryProxy,
            this.VestingCreator,
          ],
        },
        {
          categoryName: "Fast BTC",
          contracts: [this.FastBTCMultisig, this.FastBTCManagedWallet],
        },
        {
          categoryName: "Liquidity Mining",
          contracts: [
            this.LiquidityMiningLockedSOV,
            this.LiquidityMining,
            this.LiquidityMiningProxy,
          ],
        },
        {
          categoryName: "Bridge",
          contracts: [
            this.bridgeRskEthEthSideBridge,
            this.bridgeRskEthEthSideFederation,
            this.bridgeRskEthEthSideMultisig,
            this.bridgeRskEthEthSideAllowToken,
            this.bridgeRskEthEthSideWeth,
            this.bridgeRskEthEthSideESov,
            this.bridgeRskEthRskSideBridge,
            this.bridgeRskEthRskSideFederation,
            this.bridgeRskEthRskSideMultisig,
            this.bridgeRskEthRskSideAllowToken,
            this.bridgeRskEthRskSideETHes,
            this.bridgeRskBscBScSideBridge,
            this.bridgeRskBscBScSideFederation,
            this.bridgeRskBscBScSideMultisig,
            this.bridgeRskBscBScSideAllowToken,
            this.bridgeRskBscBScSideWbnb,
            this.bridgeRskBscBScSideBSov,
            this.bridgeRskBSCRskSideBridge,
            this.bridgeRskBSCRskSideFederation,
            this.bridgeRskBSCRskSideMultisig,
            this.bridgeRskBSCRskSideAllowToken,
            this.bridgeRskBSCRskSideBNBbs,
            this.bridgeRskBSCRskSideETHbs,
          ],
        },
        {
          categoryName: "Aggeregators",
          contracts: [this.xusd, this.eths, this.bnbs],
        },
        {
          categoryName: "Mynt",
          contracts: [
            this.MyntACL,
            this.ACLConfigurator,
            this.BalanceRedirectPresale,
            this.BancorFormula,
            this.Controller,
            this.Kernel,
            this.EVMScriptRegistryFactory,
            this.DAOFactory,
            this.MarketMaker,
            this.Reserve,
            this.TapDisabled,
            this.MyntToken,
            this.DAO,
          ],
        },
        {
          categoryName: "Watcher",
          contracts: [this.Watcher],
        },
        {
          categoryName: "Limit Order",
          contracts: [this.SettlementProxy],
        },
        {
          categoryName: "Prepetual Futures",
          contracts: [
            this.PerpetualManagerProxy,
            this.RbtcPaymaster,
            this.LimitOrderBookFactory,
            this.BTCUSDOracle,
            this.BTCUSDOrderbook,
            this.marginTokenAddr,
          ],
        },
        {
          categoryName: "Zero",
          contracts: [
            this.zero_activePool,
            this.zero_activePool_Implementation,
            this.zero_borrowerOperations,
            this.zero_borrowerOperations_Impl,
            this.zero_troveManager,
            this.zero_troveManager_Implementetion,
            this.zero_troveManagerRedeemOps,
            this.zero_collSurplusPool,
            this.zero_collSurplusPool_Impl,
            this.zero_communityIssuance,
            this.zero_communityIssuance_Impl,
            this.zero_defaultPool,
            this.zero_defaultPool_Implementation,
            this.zero_hintHelpers,
            this.zero_hintHelpers_Implementation,
            this.zero_zeroStaking,
            this.zero_zeroStaking_Implementation,
            this.zero_priceFeed,
            this.zero_priceFeed_Implementation,
            this.zero_sortedTroves,
            this.zero_sortedTroves_Implementation,
            this.zero_stabilityPool,
            this.zero_stabilityPool_Implementation,
            this.zero_gasPool,
            this.zero_liquityBaseParams,
            this.zero_liquityBaseParams_Impl,
            this.zero_feeDistributor,
            this.zero_feeDistributor_Implementation,
            this.zero_zusdToken,
            this.zero_zusdToken_Implementation,
            this.zero_zeroToken,
            this.zero_zeroToken_Implementation,
            this.zero_multiTroveGetter,
            this.zero_multiTroveGetter_Impl,
          ],
        },
        {
          categoryName: "Babel-Fis Bsc-Dev",
          contracts: [
            this.BabelFisBscDevMassetProxy,
            this.BabelFisBscDevMasset,
            this.BabelFisBscDevToken,
            this.BabelFisBscDevBasketManager,
            this.BabelFisBscDevmigrations,
          ],
        },
      ],
    };
  }

  contractMapper(contract) {
    return {
      contractName: contract.contractName,
      address: contract.address,
      params: contract.getParams(),
    };
  }

  onChange(callback: OnChangeCallback = () => {}) {
    this.onChangeCallback = callback;
  }

  change() {
    this.onChangeCallback(this.getData());
  }
}

export default GovernanceData;
