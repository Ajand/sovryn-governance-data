interface ContractsAddresses {
  priceFeeds: {
    bProPriceFeed: string;
    priceFeedRSKOracle: string;
    priceFeedsMoC: string;
    priceFeeds: string;
    usdtPriceFeed: string;
    mocState: string;
  };

  misc: {
    swapsImpl: string;
  };

  protocol: {
    sovryn: string;
    settings: string
  }
}

export { ContractsAddresses };
