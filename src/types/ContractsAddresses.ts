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
  };

  misc: {
    swapsImpl: string;
    swapExternal: string;
  };

  protocol: {
    sovryn: string;
    settings: string;
  };
}

export { ContractsAddresses };
