interface ContractsAddresses {
  priceFeeds: {
    bProPriceFeed: string;
    priceFeedRSKOracle: string;
    priceFeedsMoC: string;
    priceFeeds: string;
    usdtPriceFeed: string;
    mocState: string;
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
}

export { ContractsAddresses };
