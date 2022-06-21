import GovernanceData from "../src";
import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./data");

const governanceData = new GovernanceData(localStorage);

governanceData.getData();

governanceData.onChange((currentData) => {
  console.log(currentData)
});
