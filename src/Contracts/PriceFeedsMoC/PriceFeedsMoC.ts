import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage } from "../../types";
import GovernanceData from "../../GovernanceData";

class PriceFeedsMoC {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  rskOracleAddress: string;
  mocOracleAddress: string;

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
    const cachedMoCOracleAddress = this.localStorage.getItem(
      `${contractName}:${address}:mocOracleAddress`
    );
    this.rskOracleAddress = cachedRskOracleAddress
      ? cachedRskOracleAddress
      : "Loading";
    this.mocOracleAddress = cachedMoCOracleAddress
      ? cachedMoCOracleAddress
      : "Loading";
    this.fetchRskOracleAddress();
    this.fetchMoCOracleAddress();
    this.rskOracleListener();
    this.mocOracleListener();
  }

  async fetchMoCOracleAddress() {
    const currMoCOracleAddress = await this.contract.mocOracleAddress();
    this.setMoCOracleAddress(currMoCOracleAddress);
  }

  mocOracleListener() {
    const filter = this.contract.filters.SetRSKOracleAddress(null, null);

    this.contract.on(filter, () => {
      this.fetchRskOracleAddress();
    });
  }

  setMoCOracleAddress(currMoCOracleAddress: string) {
    if (this.mocOracleAddress !== currMoCOracleAddress) {
      this.mocOracleAddress = currMoCOracleAddress;
      this.governanceData.change();
      this.localStorage.setItem(
        `${this.contractName}:${this.address}:mocOracleAddress`,
        this.mocOracleAddress
      );
    }
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
      { name: "RSK Oracle Address", value: this.rskOracleAddress },
      { name: "MoC Oracle Address", value: this.mocOracleAddress },
    ];
  }
}

export default PriceFeedsMoC;
