interface ContractsAddresses {
  priceFeeds: {
    priceFeedsMoC: string;
    usdtPriceFeed: string;
    bProPriceFeed: string;
    priceFeedRSKOracle: string;
    priceFeeds: string;
    mocState: string;
    mocPriceFeed: string;
    sovPriceFeed: string;
    ethsPriceFeed: string;
    bnbsPriceFeed: string;
    xusdPriceFeed: string;
    fishPriceFeed: string;
    rifPriceFeed: string;
    myntPriceFeed: string;
  };

  loan: {
    settings: string;
    opening: string;
    maintenance: string;
    closing: string;
    closingLiquidation: string;
    closingRollover: string;
    closingWith: string;
    closingBase: string;
    iDOC: {
      loanToken: string;
      loanTokenLogicProxy: string;
    };
    iRBTC: {
      loanToken: string;
      loanTokenLogicProxy: string;
    };
    iUSDT: {
      loanToken: string;
      loanTokenLogicProxy: string;
    };
    iBPRo: {
      loanToken: string;
      loanTokenLogicProxy: string;
    };
    iXUSD: {
      loanToken: string;
      loanTokenLogicProxy: string;
    };
    loanTokenLogicBeacon: {
      loanTokenLogicBeaconLM: string;
      loanTokenLogicBeaconWRBTC: string;
    };
    loanTokenLogicModule: {
      loanTokenLogicLM: string;
      loanTokenLogicWRBTC: string;
      loanTokenSettingsLowerAdmin: string;
    };
    affiliates: string;
  };

  tokens: {
    docToken: string;
    wrbtc: string;
    usdt: string;
    bpro: string;
    eths: string;
    moc: string;
    xusd: string;
    fish: string;
    bnbs: string;
    rif: string;
    mynt: string;
  };

  swaps: {
    general: {
      swapNetwork: string;
      rbtcWrapperForAmm: string;
    };
    doc: {
      converter: string;
      docPool: string;
      btcPool: string;
    };
    usdt: {
      converter: string;
      usdtPool: string;
      btcPool: string;
    };
    bpro: {
      converter: string;
      bproPool: string;
      btcPool: string;
    };
    sov: {
      converter: string;
      pool: string;
    };
    eth: {
      converter: string;
      pool: string;
    };
    moc: {
      converter: string;
      pool: string;
    };
    bnb: {
      converter: string;
      pool: string;
    };
    xusd: {
      converter: string;
      pool: string;
    };
    fish: {
      converter: string;
      pool: string;
    };
    rif: {
      converter: string;
      pool: string;
    };
    mynt: {
      converter: string;
      pool: string;
    };

    oracles: {
      bpro: string;
      moc: string;
      sov: string;
      eth: string;
      bnb: string;
      xusd: string;
      fish: string;
      rif: string;
      mynt: string;
    };

    misc: {
      contractRegistry: string;
      converterFactory: string;
      sovrynSwapFormula: string;
      conversionPathFinder: string;
      converterUpgrader: string;
      converterRegistry: string;
      converterRegistryData: string;
      liquidTokenConverterFactory: string;
      liquidityPoolV1ConverterFactory: string;
      liquidityPoolV2ConverterFactory: string;
      liquidityPoolV2ConverterAnchorFactory: string;
      liquidityPoolV2ConverterCustomFactory: string;
      oracleWhitelist: string;
      swapSettings: string;
    };
  };

  misc: {
    swapsImpl: string;
    swapExternal: string;
    watcher: string;
  };

  protocol: {
    sovryn: string;
    settings: string;
  };

  multisig: {
    exchequerMultisig: string;
  };

  nfts: {
    oGEarlyAccessToken: string;
    genesisCommunityTier: string;
    genesisHeroTier: string;
    genesisSuperHeroTier: string;
  };

  bridges: {
    ethRsk: {
      ethSide: {
        bridge: string;
        federation: string;
        multisig: string;
        allowToken: string;
        weth: string;
        eSov: string;
      };
      rskSide: {
        bridge: string;
        federation: string;
        multisig: string;
        allowToken: string;
        ethes: string;
      };
    };
    bscRsk: {
      bscSide: {
        bridge: string;
        federation: string;
        multisig: string;
        allowToken: string;
        wbnb: string;
        bsov: string;
      };
      rskSide: {
        bridge: string;
        federation: string;
        multisig: string;
        allowToken: string;
        bnbs: string;
        ethbs: string;
      };
    };
  };

  governance1: {
    NTSOV: string;
    governor: string;
    timelock: string;
    governorVault: string;
    MultiSigKeyHolders: string;
  };

  genesisSale: {
    CSOVToken: string;
    CrowdSale: string;
    CSOV2: string;
  };

  governance2: {
    Staking: string;
    StakingRewardsProxy: string;
    VestingRegistryProxy: string;
    SOV: string;
    StakingImplementation: string;
    FeeSharingProxyOld: string;
    FeeSharingProxy: string;
    FeeSharingLogic: string;
    TimelockOwner: string;
    GovernorOwner: string;
    GovernorVaultOwner: string;
    TimelockAdmin: string;
    GovernorAdmin: string;
    GovernorVaultAdmin: string;
    VestingLogic: string;
    VestingRegistry: string;
    AdoptionFund: string;
    DevelopmentFund: string;
    StakingRewardsLogic: string;
    VestingCreator: string;
  };

  fastBTC: {
    Multisig: string;
    ManagedWallet: string;
  };

  LiquidityMining: {
    LockedSOV: string;
    LiquidityMining: string;
    LiquidityMiningProxy: string;
  };

  aggregators: {
    xusd: string;
    eths: string;
    bnbs: string;
  };

  Mynt: {
    ACL: string;
    ACLConfigurator: string;
    BalanceRedirectPresale: string;
    BancorFormula: string;
    Controller: string;
    Kernel: string;
    EVMScriptRegistryFactory: string;
    DAOFactory: string;
    MarketMaker: string;
    Reserve: string;
    TapDisabled: string;
    MyntToken: string;
    DAO: string;
  };

  LimitOrder: {
    SettlementProxy: string;
  };

  PrepetualFutures: {
    PerpetualManagerProxy: string;
    RbtcPaymaster: string;
    LimitOrderBookFactory: string;
    BTCUSDOracle: string;
    BTCUSDOrderbook: string;
    marginTokenAddr: string;
  };

  zero: {
    activePool: string;
    activePool_Implementation: string;
    borrowerOperations: string;
    borrowerOperations_Impl: string;
    troveManager: string;
    troveManager_Implementetion: string;
    troveManagerRedeemOps: string;
    collSurplusPool: string;
    collSurplusPool_Impl: string;
    communityIssuance: string;
    communityIssuance_Impl: string;
    defaultPool: string;
    defaultPool_Implementation: string;
    hintHelpers: string;
    hintHelpers_Implementation: string;
    zeroStaking: string;
    zeroStaking_Implementation: string;
    priceFeed: string;
    priceFeed_Implementation: string;
    sortedTroves: string;
    sortedTroves_Implementation: string;
    stabilityPool: string;
    stabilityPool_Implementation: string;
    gasPool: string;
    liquityBaseParams: string;
    liquityBaseParams_Impl: string;
    feeDistributor: string;
    feeDistributor_Implementation: string;
    zusdToken: string;
    zusdToken_Implementation: string;
    zeroToken: string;
    zeroToken_Implementation: string;
    multiTroveGetter: string;
    multiTroveGetter_Impl: string;
  };

  BabelFisBscDev: {
    MassetProxy: string;
    Masset: string;
    Token: string;
    BasketManager: string;
    migrations: string;
  };
}

export { ContractsAddresses };
