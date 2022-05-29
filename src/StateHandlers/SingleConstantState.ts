import { State } from "../types";

const SingleSimpleState =
  () =>
  (identifier: string, stateName: string, value: any): State => {
    const returnedValues = () => {
      return {
        loading: false,
        value,
        identifier,
        name: stateName,
      };
    };

    return returnedValues();
  };

export default SingleSimpleState;
