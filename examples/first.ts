import GovernanceData, { utils } from "../src";
import { LocalStorage } from "node-localstorage";

const { getContracts } = utils;

const localStorage = new LocalStorage("./data");

const governanceData = new GovernanceData(localStorage);

governanceData.getData();

getContracts(governanceData.getData())

governanceData.onChange((currentData) => {
  //console.log(currentData);
});
