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

  misc: {
    swapsImpl: string;
  };

  protocol: {
    sovryn: string;
    settings: string;
  };
}

export { ContractsAddresses };
