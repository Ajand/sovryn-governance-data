import { ContractParam, LocalStorage } from "../types";
import { ethers } from "ethers";
import { SingleState } from "../types";
import GovernanceData from "../GovernanceData";

const SingleSimpleState =
  (
    localStorage: LocalStorage,
    contract: ethers.Contract,
    pollInterval: number = 30 * 1000
  ) =>
  (
    onChange: Function,
    identifier: string,
    stateName: string,
    listener?: ethers.EventFilter
  ): SingleState => {
    var loading = true;
    var value: any = localStorage.getItem(`${contract.address}:${identifier}`)
      ? localStorage.getItem(`${contract.address}:${identifier}`)
      : undefined;

    const setState = (currentState: any) => {
      if (value !== currentState) {
        value = currentState;
        onChange(returnedValues());
        localStorage.setItem(`${contract.address}:${identifier}`, currentState);
      }
    };

    const fetchState = async () => {
      const currentState = await contract[identifier]();
      loading = false;
      onChange(returnedValues());
      setState(currentState);
    };

    fetchState();

    const pollState = () => {
      setInterval(() => {
        fetchState();
      }, pollInterval);
    };

    const stateListener = () => {
      contract.on(listener, () => {
        fetchState();
      });
    };

    if (listener) {
      stateListener();
    } else {
      pollState();
    }

    const returnedValues = () => {
      return {
        loading,
        value,
        identifier,
        name: stateName,
      };
    };

    return returnedValues();
  };

export default SingleSimpleState;
