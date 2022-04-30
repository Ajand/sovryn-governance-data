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
    closing: "0x49EcdCCC0b52f306307168DC765e904a739F4770"
  },
  misc: {
    swapsImpl: "0xf515b17624A89c8d71E06D587eCd68f60E5Ca2C8",
    swapExternal: "0x9b75DbF670774451639CBc0E6F5792D8AB4f72E2"
  },
  protocol: {
    sovryn: "0x5A0D867e0D70Fcc6Ade25C3F1B89d618b5B4Eaa7",
    settings: "0x61d553223161759361Fe0DF82A993D2415E69984",
  },
};

export default MainnetAddresses;
