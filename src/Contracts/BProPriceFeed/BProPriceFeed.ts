import { ethers } from "ethers";
import abi from "./abi.json";
import { ContractParam, LocalStorage } from "../../types";
import GovernanceData from "../../GovernanceData";

class BProPriceFeed {
  localStorage: LocalStorage;
  contract: ethers.Contract;

  governanceData: GovernanceData;

  address: string;
  contractName: string;
  mocStateAddress: string;

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
    const cachedMocAddress = this.localStorage.getItem(
      `${contractName}:${address}:mocStateAddress`
    );
    this.mocStateAddress = cachedMocAddress ? cachedMocAddress : "Loading";
    this.fetchMoCStateAddress();
    this.mocListener();
  }

  async fetchMoCStateAddress() {
    const currMocStateAddress = await this.contract.mocStateAddress();
    this.setMoCStateAddress(currMocStateAddress);
  }

  mocListener() {
    const filter = this.contract.filters.SetMoCStateAddress(null, null);

    this.contract.on(filter, () => {
      this.fetchMoCStateAddress();
    });
  }

  setMoCStateAddress(currMocStateAddress: string) {
    if (this.mocStateAddress !== currMocStateAddress) {
      this.governanceData.change();
      this.localStorage.setItem(
        `${this.contractName}:${this.address}:mocStateAddress`,
        this.mocStateAddress
      );
    }
  }

  getParams(): ContractParam[] {
    return [
      { name: "Money on Chain State Address", value: this.mocStateAddress },
    ];
  }
}

export default BProPriceFeed;
