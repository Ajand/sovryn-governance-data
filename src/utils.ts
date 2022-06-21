import GovernanceData from "./GovernanceData";

const getContracts = (
  governanceState: ReturnType<GovernanceData["getData"]>
) => {
  return governanceState.categories.reduce((pV, cV) => {
    return [
      ...pV,
      ...cV.contracts.map((cont) => ({
        params: cont.getParams(),
        categoryName: cV.categoryName,
        ...cont,
      })),
    ];
  }, []);
};

const getAllCategories = (
  governanceState: ReturnType<GovernanceData["getData"]>
) => {
  const allCategories = governanceState.categories.map(
    (cat) => cat.categoryName
  );
};

const filterSelectedCategories =
  (allContracts: ReturnType<typeof getContracts>) =>
  (categories: ReturnType<typeof getContracts>[] = []) => {
    if (categories.length === 0) return allContracts;
    return allContracts.filter((cont) =>
      categories.includes(cont.categoryName)
    );
  };

const filterBySearchString =
  (allContracts: ReturnType<typeof getContracts>) => (searchStr: string) => {
    if (!searchStr) return allContracts;
    const result = new Set([]);
    allContracts
      .filter(
        (cont) =>
          cont.contractName.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
      )
      .forEach((cont) => result.add(cont));
    allContracts
      .filter((cont) => {
        return cont.address.toLowerCase().indexOf(searchStr.toLowerCase()) > -1;
      })
      .forEach((cont) => result.add(cont));
    allContracts
      .filter((cont) => cont.governor?.value)
      .filter((cont) => {
        return (
          cont.governor?.value.toLowerCase().indexOf(searchStr.toLowerCase()) >
          -1
        );
      })
      .forEach((cont) => result.add(cont));
    return [...result];
  };

export default {
    getContracts,
    getAllCategories,
    filterSelectedCategories,
    filterBySearchString
};
