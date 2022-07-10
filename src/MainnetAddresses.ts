import { ContractsAddresses } from "./types";

const MainnetAddresses: ContractsAddresses = {
  priceFeeds: {
    bProPriceFeed: "0x389e2447e1397A8e485D658a44D845a324A338Cf",
    priceFeedRSKOracle: "0x54c33Cb8a3a32A716BeC40C3CEB5bA8B0fB92a57",
    priceFeedsMoC: "0x391fe8a92a7fc626a25f30e8c19b92bf8be37fd3",
    priceFeeds: "0x437AC62769f386b2d238409B7f0a7596d36506e4",
    usdtPriceFeed: "0xed80ccde8baeff2dbfc70d3028a27e501fa0d7d5",
    mocState: "0xb9C42EFc8ec54490a37cA91c423F7285Fa01e257",
    mocPriceFeed: "0xfF7ffCC3d0952C0133D4568C87ef4DeC72E4FddF",
    sovPriceFeed: "0xA266aA67e2a25B0CCa460DEAfcacC81D17341a0D",
    ethsPriceFeed: "0x9C9E06a23EE640A20DaAEd58E69012bB0742A098",
    bnbsPriceFeed: "0xfb9898367e61B2e0CCE6C529dD5307996fAbd155",
    xusdPriceFeed: "0xEd80Ccde8bAeFf2dBFC70d3028a27e501Fa0D7D5",
    fishPriceFeed: "0x95576a065fD880e6C6621dBfAB54FdB9f827C783",
    rifPriceFeed: "0x15e6B67d5bCd57232104A891f466578b28f447D9",
    myntPriceFeed: "0x1C11180b6730661090634cfD9F2510a1acA26fAf",
  },
  loan: {
    settings: "0x4D11C63937d07EbBAb6994d14649BAfe056F6BBe",
    opening: "0x2Deb2a6B66928754b501D0c2aef1969FfACA01a4",
    maintenance: "0x88DDf3F75151eABC5F132be0f603b9d4FC0B1025",
    closing: "0x49EcdCCC0b52f306307168DC765e904a739F4770",
    closingLiquidation: "0x5a0171d24EB4eC56362430D7d7FB5949a13B0AFA",
    closingRollover: "0x06593688B3669346Ff0076EE87365F59be1ddcd0",
    closingWith: "0xfe901C84Ed9c827b48Ca3AF8b2C8a6221638Eb8A",
    closingBase: "0x712C33fde72E8DF893DA603b15f6a342388cEf60",
    iDOC: {
      loanToken: "0xd8D25f03EBbA94E15Df2eD4d6D38276B595593c1",
      loanTokenLogicProxy: "0x745ED558A88eBA1EB765E6acE70f3d4197f0f9C0",
    },
    iRBTC: {
      loanToken: "0xa9DcDC63eaBb8a2b6f39D7fF9429d88340044a7A",
      loanTokenLogicProxy: "0x0978f1C6E790dF6157e1E65708F73cCD8a014bbE",
    },
    iUSDT: {
      loanToken: "0x849C47f9C259E9D62F289BF1b2729039698D8387",
      loanTokenLogicProxy: "0x8567ab78baE6F533e8fd3dc221FD680019f452cc",
    },
    iBPRo: {
      loanToken: "0x6E2fb26a60dA535732F8149b25018C9c0823a715",
      loanTokenLogicProxy: "0x281B77a694fc76a163c2dE6C91391189591412f3",
    },
    iXUSD: {
      loanToken: "0x8F77ecf69711a4b346f23109c40416BE3dC7f129",
      loanTokenLogicProxy: "0x4061098838CB4cE2eBa31EE8474A6b3Ccda77Fe1",
    },
    loanTokenLogicBeacon: {
      loanTokenLogicBeaconLM: "0xd7FB11F4b71C6bFE9Db50f3C02c821Af8F616501",
      loanTokenLogicBeaconWRBTC: "0xF8c5a9B496cDda3A884A9381bF717D8F35d6a86A",
    },
    loanTokenLogicModule: {
      loanTokenLogicLM: "0x2564100636274dCD041a952A80BF20E8D8bD57AE",
      loanTokenLogicWRBTC: "0x10a3CEc4Ee7B3990C2A01a06516AB6fC5AC40093",
      loanTokenSettingsLowerAdmin: "0x19F0144b11C2609bB65A6195F6940407463c56e5",
    },
    affiliates: "0x30bab63262ac59218116fc6278CFe81392657f6B",
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
    swapsImpl: "0x23bA07E2c3302B517B2cFEea4C5CaDF6a7b946bA",
    swapExternal: "0x997044915f0540b0b6651d7852Db01968CeA423B",
    watcher: "0x051B89f575fCd540F0a6a5B49c75f9a83BB2Cf07",
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
      moc: "0x8Cda228A6870D7B3a9Fe1e42604b35F39Fbc5D59",
      sov: "0x4290243b7F3aEF0F6922dAd4F9F8d321ee320fBd",
      eth: "0xD6CcacF91c3ca6705aD3047a55dC7760c5ADF1F4",
      bnb: "0x66464BED2420Ab2e7c2d06A9eEb67d06D7E10eAC",
      xusd: "0xD08eDf687418dF0107bAbCc8Fcab9064F3A6fc05",
      fish: "0x2D78E4dc352872Aa6ca12B40d18301Ff6DBE5ECB",
      rif: "0x6C339235Bad0381C3bb6CaCecA68C941e81a4bDc",
      mynt: "0x3f9fe40Cf3013d7B8E5517B166b909911d5AFcC2",
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
    settings: "0x1401B5b40759893F5E5D5826Da709E4fE35C438e",
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

  bridges: {
    ethRsk: {
      ethSide: {
        bridge: "0x33C0D33a0d4312562ad622F91d12B0AC47366EE1",
        federation: "0x2493b92b3b958c8d1e93899cae00bfc4854cbd18",
        multisig: "0x062c74f9d27b1178bb76186c1756128ccb3ccd2e",
        allowToken: "0x8DF20c2c85Bee0c3DA250dA96D892598C70aA1bE",
        weth: "0xd412acd34a832a09c80c8a4895ff46d733f09538",
        eSov: "0xbdab72602e9ad40fc6a6852caf43258113b8f7a5",
      },
      rskSide: {
        bridge: "0x1CcAd820B6d031B41C54f1F3dA11c0d48b399581",
        federation: "0x99896b7e917ff9c130bb86cde0d778be37e3464c",
        multisig: "0xB64322e10b5aE1BE121B8Bb0dead560c53d9Dbc3",
        allowToken: "0xd2090fe759613C3A3E2962c6bB2ad046f62d32fF",
        ethes: "0xFe878227c8F334038DAb20a99fC3B373fFe0a755",
      },
    },
    bscRsk: {
      bscSide: {
        bridge: "0xdfc7127593c8af1a17146893f10e08528f4c2aa7",
        federation: "0xfc321356bb2ca3d68fafe9515c24c9b23b63a6a6",
        multisig: "0xec3fabc3517e64e07669dd1d2d673f466f93a328",
        allowToken: "0x05b68e70168e876b2025f837bc8e0b2312d5327d",
        wbnb: "0xB6C313a427fa911A4C9a119e80Feea0fe20E69F0",
        bsov: "0x8753ede1b3a36358e4d7780f384f3f7a2d9e4359",
      },
      rskSide: {
        bridge: "0x971b97c8cc82e7d27bc467c2dc3f219c6ee2e350",
        federation: "0xc4b5178cc086e764568adfb2daccbb0d973e8132",
        multisig: "0xee9ea57555d9533d71f6f77e0e480961f068a6c5",
        allowToken: "0xa2f50a2c699c1aa3b9089f6b565d4999d45d8983",
        bnbs: "0xd2a826b78200c8434b957913ce4067e6e3169385",
        ethbs: "0x30d1B36924c2c0CD1c03EC257D7FFf31bD8c3007",
      },
    },
  },

  governance1: {
    NTSOV: "0xc8cBdb42Ce55bDEe96D6425396e4047eE46F2E37",
    governor: "0xCe3a21a69c05CfE638B722f53593A047bdd6E9De",
    timelock: "0x04cb2eF013F866E9915016E44FE36218361C1F5a",
    governorVault: "0xC7A1637b37190a456b017897207bceb2A29f19b9",
    MultiSigKeyHolders: "0x1B1656CBEf05522184f833B5ca9405072Daa8416",
  },

  genesisSale: {
    CSOVToken: "0x0106F2fFBF6A4f5DEcE323d20E16E2037E732790",
    CrowdSale: "0xd42070b07D4EAbb801d76c6929f21749647275Ec",
    CSOV2: "0x7f7Dcf9DF951C4A332740e9a125720DA242A34ff",
  },

  governance2: {
    Staking: "0x5684a06CaB22Db16d901fEe2A5C081b4C91eA40e",
    StakingRewardsProxy: "0x8304FB3614c728B712e94F9D4DF6719fede6517F",
    VestingRegistryProxy: "0xe24ABdB7DcaB57F3cbe4cBDDd850D52F143eE920",
    SOV: "0xEFc78fc7d48b64958315949279Ba181c2114ABBd",
    StakingImplementation: "0x81570497e763809900a8e91c8daf3020085e43ab",
    FeeSharingProxyOld: "0x12B1B0C67d9A771EB5Db7726d23fdc6848fd93ef",
    FeeSharingProxy: "0x115cAF168c51eD15ec535727F64684D33B7b08D1",
    FeeSharingLogic: "0x724c40084d88f15166df1502D65C5300ac9f6A1C",
    TimelockOwner: "0x967c84b731679E36A344002b8E3CE50620A7F69f",
    GovernorOwner: "0x6496DF39D000478a7A7352C01E0E713835051CcD",
    GovernorVaultOwner: "0x05f4f068DF59a5aA7911f57cE4f41ebFBcB8E247",
    TimelockAdmin: "0x6c94c8aa97C08fC31fb06fbFDa90e1E09529FB13",
    GovernorAdmin: "0xfF25f66b7D7F385503D70574AE0170b6B1622dAd",
    GovernorVaultAdmin: "0x51C754330c6cD04B810014E769Dab0343E31409E",
    VestingLogic: "0x24fbA2281202C3aaE95A3440C08C0050448508A6",
    VestingRegistry: "0x80B036ae59B3e38B573837c01BB1DB95515b7E6B",
    AdoptionFund: "0x0f31cfd6aAb4d378668Ad74DeFa89d3f4DB26633",
    DevelopmentFund: "0x617866cC4a089c3653ddC31a618b078291839AeB",
    StakingRewardsLogic: "0x0D7dFd579296Af1D5086E6A66Da262ccdeBc358D",
    VestingCreator: "0xa003D9F781a498D90f489328612E74Af1027417f",
  },

  fastBTC: {
    Multisig: "0x0f279e810B95E0d425622b9b40D7bCD0B5C4B19d",
    ManagedWallet: "0xC9e14126E5796e999890a4344b8e4c99Ac7002A1",
  },

  LiquidityMining: {
    LockedSOV: "0xB4e4517cA4Edf591Dcafb702999F04f02E57D978",
    LiquidityMining: "0xbD50232e6fbFa43c95062D1a9d6ecf5439906C21",
    LiquidityMiningProxy: "0xf730af26e87D9F55E46A6C447ED2235C385E55e0",
  },

  aggregators: {
    xusd: "0x1440d19436bEeaF8517896bffB957a88EC95a00F",
    eths: "0x4bF113905d7F69202106f613308bb02c84aaDF2F",
    bnbs: "0xafD905Fe2EdBF5A7367A73B0F1e6a62Cb5E27D3e",
  },

  Mynt: {
    ACL: "0x21c92A9aB37cEded54cACb8B6c9Ac7CDAA38bF19",
    ACLConfigurator: "0x13Eb7E5a51c9F2469ce673998ADfE65478B87c1E",
    BalanceRedirectPresale: "0xC3d646Ab4e1bE05eFb4Afaedf5Ae656Ff5AE4959",
    BancorFormula: "0x6cBb8d512389768d9809BcB3b76d71251a6769Da",
    Controller: "0xB576658700D32CCE28552349bCD52FaD8173ae32",
    Kernel: "0x172E0FF3f2885Cb786D8b60FC160F22D282d1126",
    EVMScriptRegistryFactory: "0x260Ebea4790Fa3eBC8532dCCC3fA998ECC294cbF",
    DAOFactory: "0xc0FB6d3E120B356E527f3494535D2C6C2759e97B",
    MarketMaker: "0x722935fF8A99D801D802bb3EE528408C11C18656",
    Reserve: "0x6FB7A6A5Bd3f800130443AE202A58Fdbe11B8D5C",
    TapDisabled: "0x76e94fE82Ac0AD412cFD5D24CF02099dCE7919C5",
    MyntToken: "0x2e6B1d146064613E8f521Eb3c6e65070af964EbB",
    DAO: "0x5e6687a03e4c96d7B7e3b9fE96dA1660E7c9A5a7",
  },

  LimitOrder: {
    SettlementProxy: "0x913B394E82DfAC26456934c25e4517EE8a8f84D4",
  },

  PrepetualFutures: {
    PerpetualManagerProxy: "0x86f586dc122d31E7654f89eb566B779C3D843e22",
    RbtcPaymaster: "0xd537EB00E053Fc97A58f22b2FB6f064Bd4C10cCA",
    LimitOrderBookFactory: "0x71509E41985BA05f5f86661F1b5e4c10337f03E3",
    BTCUSDOracle: "0x37E551b23f982f1b21f668413a4EEfADaAA7e6BC",
    BTCUSDOrderbook: "0x3ee8dAe27Feb809BD51eEdda749c3C2f1851e492",
    marginTokenAddr: "0x6a7F2d2e5D5756729e875c8F8fC254448E763Fdf",
  },

  zero: {
    activePool: "0xf294ea272d6f8FedC08aCf8E93ff50fe99E1f7E8",
    activePool_Implementation: "0x14C7357E1AC73E5a88E33Aa3d06707795311B391",
    borrowerOperations: "0x5B9dB4B8bdeF3e57323187a9AC2639C5DEe5FD39",
    borrowerOperations_Impl: "0x51817b6d240d097883Edf3B7B42b53a96d259D60",
    troveManager: "0x82B09695ee4F214f3A0803683C4AaEc332E4E0a3",
    troveManager_Implementetion: "0x90CA848fF40aa416a22a353CE095CA8461995AeE",
    troveManagerRedeemOps: "0xd3a497eC2dE882daA13a04eDFc792B3F42Db47c0",
    collSurplusPool: "0x310ec7Fe6e4943DA773De8948255E37CC45e34bb",
    collSurplusPool_Impl: "0xE9005C36452576Efa74F297906E77381e6878398",
    communityIssuance: "0x9398131Dee201c7B530c5E3bAeeEB2e5B10F231c",
    communityIssuance_Impl: "0x40afAb7909aFBCc119ad563d04Fcb1613043fE6A",
    defaultPool: "0xcdbA14ca707B99afb8CA93E178aD614Db422a030",
    defaultPool_Implementation: "0x12BaF6F8151Bd26F22E4Ae1df3ceF6746840dA93",
    hintHelpers: "0x1D7DaC5a63A35540bE9e031212ecf39584AE5595",
    hintHelpers_Implementation: "0x772BE98f08374A6fB688f0f9EC5CDbFc8a6ccb97",
    zeroStaking: "0x5369941b2a08db3feC31C4a6cD3b902f7b1468A3",
    zeroStaking_Implementation: "0xe09E12deB814e1569101890b401A71a873bfD33e",
    priceFeed: "0x6D1d9574d67e04cf35Fa1d916F763eDDae03b75d",
    priceFeed_Implementation: "0x1281eCFE66C9FA632DF1Eb1eC19405C3B1BBAAF0",
    sortedTroves: "0xdeEB95480B94f9395514Fe35CAF692A1C788DfE9",
    sortedTroves_Implementation: "0x6dCc9C917A77C836057452DCC16a4E4F0a8EE2dC",
    stabilityPool: "0xd46C0225D1331B46700d64fF8c906709D15C9202",
    stabilityPool_Implementation: "0xD42be7B9d73f7a43f5F4318D6e69A70e1B77392d",
    gasPool: "0x58Aa11ED8d9C8574b5E2D201dc1A56f1E2155735",
    liquityBaseParams: "0xf8B04A36c36d5DbD1a9Fe7B74897c609d6A17aa2",
    liquityBaseParams_Impl: "0x4584A4F903821EbC9e83Aac129d5aF12D9024c3B",
    feeDistributor: "0x1261d5872d56e2Ab61B3C68451D015b752105027",
    feeDistributor_Implementation: "0x006a2d407b3e5D54E0A835877cDC2f043E3e7296",
    zusdToken: "0xdB107FA69E33f05180a4C2cE9c2E7CB481645C2d",
    zusdToken_Implementation: "0xf3522efC07DcbB273d774A2E6f4d902C44A2e507",
    zeroToken: "0x5815D304D67Ad9240fe273452078Bd648e75e543",
    zeroToken_Implementation: "0x451291d48f23782CB5609CED5a195B0C92EddC7b",
    multiTroveGetter: "0xF265a169191348c02829B62650B025BdeAf00AE4",
    multiTroveGetter_Impl: "0x5E18262CcACF8f5c1113507Fbf3af0216533676F",
  },

  BabelFisBscDev: {
    MassetProxy: "0x1da3d286a3abeadb2b7677c99730d725af58e39d",
    Masset: "0x77657f38d46548778296071dab8a0a601d390c20",
    Token: "0x6a7f2d2e5d5756729e875c8f8fc254448e763fdf",
    BasketManager: "0x152E8D16f7fF6F9BDA5d989CC2daA514f427a9BB",
    migrations: "0x1506E6A9fa9E805566490280eEC79cd54cF30F89",
  },
};

export default MainnetAddresses;
