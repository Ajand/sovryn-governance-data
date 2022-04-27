import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage } from "../../types";
import GovernanceData from "../../GovernanceData";

class PriceFeedRSKOracle {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  rskOracleAddress: string;

  constructor(
    contractName: string,
    address: string,
    governanceData: GovernanceData
  ) {
    this.localStorage = governanceData.localStorage;
    this.contractName = contractName;
    this.address = address;
    this.governanceData = governanceData;
    this.contract = new ethers.Contract(
      address,
      abi,
      this.governanceData.provider
    );
    const cachedRskOracleAddress = this.localStorage.getItem(
      `${contractName}:${address}:rskOracleAddress`
    );
    this.rskOracleAddress = cachedRskOracleAddress
      ? cachedRskOracleAddress
      : "Loading";
    this.fetchRskOracleAddress();
    this.rskOracleListener();
  }

  async fetchRskOracleAddress() {
    const currRskOracleAddress = await this.contract.rskOracleAddress();
    this.setRskOracleAddress(currRskOracleAddress);
  }

  rskOracleListener() {
    const filter = this.contract.filters.SetRSKOracleAddress(null, null);

    this.contract.on(filter, () => {
      this.fetchRskOracleAddress();
    });
  }

  setRskOracleAddress(currRskOracleStateAddress: string) {
    if (this.rskOracleAddress !== currRskOracleStateAddress) {
      this.rskOracleAddress = currRskOracleStateAddress;
      this.governanceData.change();
      this.localStorage.setItem(
        `${this.contractName}:${this.address}:rskOracleAddress`,
        this.rskOracleAddress
      );
    }
  }

  getParams(): ContractParam[] {
    return [
      { name: "Rootstock Oracle Address", value: this.rskOracleAddress },
    ];
  }
}

export default PriceFeedRSKOracle;
