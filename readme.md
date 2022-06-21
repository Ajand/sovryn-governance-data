## Installation

Start with cloning this repo on your local machine:

```sh
$ npm install --save sovryn-governance-data
or
$ yarn add sovryn-governance-data
```

## API

### instance creation

in browser env:

```js
import GovernanceData from "governance-data";

const rskRPCUrl = "https://mainnet.sovryn.app/"; // There is a default value for it that is on rsk public node
/// if you don't provide your own rsk rpc url it will probably be rate limit

const governanceData = new GovernanceData(localStorage, rskRPCUrl);
```

in node env you need another package called "node-localstorage":

```js
import GovernanceData from "governance-data";
import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./data");

const rskRPCUrl = "https://mainnet.sovryn.app/"; // There is a default value for it that is on rsk public node
/// if you don't provide your own rsk rpc url it will probably be rate limit

const governanceData = new GovernanceData(localStorage, rskRPCUrl);
```

### getData

```js
governanceData.getData();
```

### subscribe to changes

```js
governanceData.onChange((currentData) => {
  console.log(currentData);
});
```

## Utils

### getContracts

Get all contracts

```js
getContracts(governanceData.getData());
```

### getAllCategories

Get all categories

```js
getAllCategories(governanceData.getData());
```

### filterSelectedCategories

filter contracts based on selected categories

```js
const listOfCategoriesYouWant = ["Marginal Trading Protocol", "Loan"];
filterSelectedCategories(governanceData.getData())(listOfCategoriesYouWant);
```

### filterBySearchString

filter contracts based on search string

```js
const searchString = "iXUSD";
filterBySearchString(governanceData.getData())(searchString);
```

### getContractName

filter contracts based on search string

```js
const contractAddress = "0xd8d25f03ebba94e15df2ed4d6d38276b595593c1";
getContractName(governanceData.getData())(contractAddress);
```
