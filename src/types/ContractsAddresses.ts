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
  };

  tokens: {
    docToken: string;
    wrbtc: string;
    usdt: string;
    bpro: string;
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
