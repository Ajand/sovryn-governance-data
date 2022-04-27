import GovernanceData from "../src";
import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./data");

const governanceData = new GovernanceData(localStorage);

governanceData.getData().forEach((data) => console.log(data));

governanceData.onChange((currentData) => {
  currentData.forEach((data) => console.log(data));
});
