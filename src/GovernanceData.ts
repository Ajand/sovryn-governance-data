import { ethers } from "ethers";
// This is going to be the main entry of the package
// Everything we need will be returned by an instance of this

class GovernanceData {
  provider: ethers.providers.Provider;

  constructor(rpcUrl: string = "https://public-node.rsk.co") {
    this.provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  }
}

export default GovernanceData;
