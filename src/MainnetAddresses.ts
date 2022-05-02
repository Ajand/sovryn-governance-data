import { ContractsAddresses } from "./types";

const MainnetAddresses: ContractsAddresses = {
  priceFeeds: {
    bProPriceFeed: "0x389e2447e1397A8e485D658a44D845a324A338Cf",
    priceFeedRSKOracle: "0x54c33Cb8a3a32A716BeC40C3CEB5bA8B0fB92a57",
    priceFeedsMoC: "0x391fe8a92a7fc626a25f30e8c19b92bf8be37fd3",
    priceFeeds: "0x437AC62769f386b2d238409B7f0a7596d36506e4",
    usdtPriceFeed: "0xed80ccde8baeff2dbfc70d3028a27e501fa0d7d5",
    mocState: "0xb9C42EFc8ec54490a37cA91c423F7285Fa01e257",
  },
  loan: {
    settings: "0x62d4Ba66721fd14007a1C49290ea4BE005b1c0b8",
    opening: "0xc51d22C296746202527509BE68f949cf8C72f2Bf",
    maintenance: "0x7CFbAA1017a419AeFd1240b24E8D781cE62FE3D8",
    closing: "0x49EcdCCC0b52f306307168DC765e904a739F4770",
    closingLiquidation: "0x5a0171d24EB4eC56362430D7d7FB5949a13B0AFA",
    closingRollover: "0x06593688B3669346Ff0076EE87365F59be1ddcd0",
    closingWith: "0xD8c5c2F3f6A9EdfAc967d35B68A996B5820ADaC9",
    closingBase: "0x712C33fde72E8DF893DA603b15f6a342388cEf60",
  },
  tokens: {
    docToken: "0xe700691da7b9851f2f35f8b8182c69c53ccad9db",
    wrbtc: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d",
    usdt: "0xEf213441a85DF4d7acBdAe0Cf78004E1e486BB96",
    bpro: "0x440cd83c160de5c96ddb20246815ea44c7abbca8",
    eths: "0x1D931Bf8656d795E50eF6D639562C5bD8Ac2B78f",
    moc: "0x9ac7fe28967b30e3a4e6e03286d715b42b453d10",
    xusd: "0xb5999795BE0EbB5bAb23144AA5FD6A02D080299F",
    fish: "0x055A902303746382FBB7D18f6aE0df56eFDc5213",
    bnbs: "0x6D9659bdF5b1A1dA217f7BbAf7dBAF8190E2e71B",
    rif: "0x2acc95758f8b5f583470ba265eb685a8f45fc9d5",
    mynt: "0x2e6B1d146064613E8f521Eb3c6e65070af964EbB",
  },
  misc: {
    swapsImpl: "0xf515b17624A89c8d71E06D587eCd68f60E5Ca2C8",
    swapExternal: "0x9b75DbF670774451639CBc0E6F5792D8AB4f72E2",
  },
  swaps: {
    general: {
      swapNetwork: "0x98aCE08D2b759a265ae326F010496bcD63C15afc",
      rbtcWrapperForAmm: "0xa917BF723433d020a15629eba71f6C2a6B38e52d",
    },
    doc: {
      converter: "0xd715192612F03D20BaE53a5054aF530C9Bb0fA3f",
      docPool: "0x2dC80332C19Fbcd5169aB4A579D87EE006cb72c0",
      btcPool: "0x840437bDe7346EC13b5451417DF50586f4DAf836",
    },
    usdt: {
      converter: "0x448c2474b255576554EeD36c24430ccFac131cE3",
      usdtPool: "0x40580E31cc14DBf7A0859F38ab36a84262Df821D",
      btcPool: "0x9c4017d1c04cfa0F97fDc9505e33a0d8aC84817F",
    },
    bpro: {
      converter: "0x26463990196B74aD5644865E4d4567E4A411e065",
      bproPool: "0x9CE25371426763025C04a9FCd581fbb9E4593475",
      btcPool: "0x75e327A83aD2BFD53da12EB718fCCFC68Bc57535",
    },
    sov: {
      converter: "0xe76Ea314b32fCf641C6c57f14110c5Baa1e45ff4",
      pool: "0x09c5faf7723b13434abdf1a65ab1b667bc02a902",
    },
    eth: {
      converter: "0xa57ec11497f45fe86eca50f4f1c9e75c8016a1af",
      pool: "0xF41Ed702df2B84AcE02772C6a0D8AE46465aA5F4",
    },
    moc: {
      converter: "0xe321442DC4793c17F41Fe3fB192a856A4864cEAF",
      pool: "0x7fef930ebaa90B2f8619722AdC55e3f1d965b79b",
    },
    bnb: {
      converter: "0x1684b871ec5f93de142e79a670b541d75be07ead",
      pool: "0x8f3d24ab3510294f1466aa105f78901b90d79d4d",
    },
    xusd: {
      converter: "0xa9c3d9681215ef7623dc28ea6b75bf87fdf285d9",
      pool: "0x6f96096687952349Dd5944e0eb1Be327dcDeb705",
    },
    fish: {
      converter: "0xdeb0894196863dbb2f2d4c683f6d33a2197056b5",
      pool: "0x35A74a38Fd7728F1c6BC39aE3b18C974b7979ddD",
    },
    rif: {
      converter: "0x65528e06371635a338ca804cd65958a11cb11009",
      pool: "0xAE66117C8105a65D914fB47d37a127E879244319",
    },
    mynt: {
      converter: "0x3a18e61d9c9f1546dea013478dd653c793098f17",
      pool: "0x36263AC99ecDcf1aB20513D580B7d8D32D3C439d",
    },
    oracles: {
      bpro: "0xe4D2e26Ce947Df7a8d04E5A9dcDef0c540C497cF",
      moc: "0xfF7ffCC3d0952C0133D4568C87ef4DeC72E4FddF",
      sov: "0x4290243b7F3aEF0F6922dAd4F9F8d321ee320fBd",
      eth: "0x9C9E06a23EE640A20DaAEd58E69012bB0742A098",
      bnb: "0x57B7B2feeA4ed576e899568F42dF272017E3d8CD",
      xusd: "0xD08eDf687418dF0107bAbCc8Fcab9064F3A6fc05",
      fish: "0x95576a065fD880e6C6621dBfAB54FdB9f827C783",
      rif: "0x15e6B67d5bCd57232104A891f466578b28f447D9",
      mynt: "0x1C11180b6730661090634cfD9F2510a1acA26fAf",
    },
    misc: {
      contractRegistry: "0x46EBC03EF2277308BdB106a73d11c65109C4B89B",
      converterFactory: "0xcF46f24423B8da97E2c06B41df28163D55e80935",
      sovrynSwapFormula: "0x3278734B16F27Ed5C69fD246df9357A866Fd811E",
      conversionPathFinder: "0xad3376bE8Df32Bb00df4c4402e6662C630167d62",
      converterUpgrader: "0x40346f7Ce14B3a10bAB22F6a0A444902CF0Bc598",
      converterRegistry: "0x31A0F8400c75d52FdB413372233F28E3bdFB1c06",
      converterRegistryData: "0x73eef416cb8B63dBfcc66719F0b74Bb7baEa48Fe",
      liquidTokenConverterFactory: "0x7cE4b812F4B2115135215FfA48D3b6f60F75cb52",
      liquidityPoolV1ConverterFactory:
        "0xD9C68613bd33c3C47235AAb22A7152837ffff453",
      liquidityPoolV2ConverterFactory:
        "0x846F005f7587f24822d51B7072906F558EE9FEB5",
      liquidityPoolV2ConverterAnchorFactory:
        "0xe93726e74EEF8097E49C1AAB7879F91B95Fa02e8",
      liquidityPoolV2ConverterCustomFactory:
        "0x5204E8BAa485F9511be3943Ebea3E4af07bdafEF",
      oracleWhitelist: "0x8e75774Ef928cE730255AB594dD1b9F0a725a56b",
      swapSettings: "0x3aB00BEFDd7Bfc0667DE6483D2D3b2F9A74AF2da",
    },
  },
  protocol: {
    sovryn: "0x5A0D867e0D70Fcc6Ade25C3F1B89d618b5B4Eaa7",
    settings: "0x61d553223161759361Fe0DF82A993D2415E69984",
  },
  multisig: {
    exchequerMultisig: "0x924f5ad34698Fd20c90Fe5D5A8A0abd3b42dc711",
  },

  nfts: {
    oGEarlyAccessToken: "0x576aE218aeCfD4CbD2DBe07250b47e26060932B1",
    genesisCommunityTier: "0x857a62c9c0b6f1211e04275a1f0c5f26fce2021f",
    genesisHeroTier: "0x7806d3fedf9c9741041f5d70af5adf326705b03d",
    genesisSuperHeroTier: "0xd9bbcd6e0ab105c83e2b5be0bbb9bb90ef963de7",
  },
};

export default MainnetAddresses;
