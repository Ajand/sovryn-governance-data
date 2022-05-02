import { LocalStorage } from "../types";
import { ethers } from "ethers";
import { State } from "../types";

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
    param: string,
    listener?: ethers.EventFilter
  ): State => {
    var loading = true;
    var value: any = localStorage.getItem(`${contract.address}:${identifier}:${param}`)
      ? localStorage.getItem(`${contract.address}:${identifier}:${param}`)
      : undefined;

    const returnedValues = () => {
      return {
        loading,
        value,
        identifier,
        name: stateName,
      };
    };

    const setState = (currentState: any) => {
      if (value !== currentState) {
        value = currentState;
        onChange(returnedValues());
        localStorage.setItem(`${contract.address}:${identifier}:${param}`, currentState);
      }
    };

    const fetchState = async () => {
      try {
        const currentState = await contract[identifier](param);
        setState(currentState);
      } catch (err) {
        console.log(err);
      }
      loading = false;
      onChange(returnedValues());
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

    return returnedValues();
  };

export default SingleSimpleState;
