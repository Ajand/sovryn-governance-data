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
