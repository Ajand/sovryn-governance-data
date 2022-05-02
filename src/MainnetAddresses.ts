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
  },
  misc: {
    swapsImpl: "0xf515b17624A89c8d71E06D587eCd68f60E5Ca2C8",
    swapExternal: "0x9b75DbF670774451639CBc0E6F5792D8AB4f72E2",
  },
  protocol: {
    sovryn: "0x5A0D867e0D70Fcc6Ade25C3F1B89d618b5B4Eaa7",
    settings: "0x61d553223161759361Fe0DF82A993D2415E69984",
  },
};

export default MainnetAddresses;
