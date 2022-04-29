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
    keys: any[] = [],
    listener?: ethers.EventFilter
  ): State => {
    var loading = true;
    var value: any = localStorage.getItem(`${contract.address}:${identifier}`)
      ? new Map(
          JSON.parse(localStorage.getItem(`${contract.address}:${identifier}`))
        )
      : new Map();

    const setState = (currentKey: any, currentState: any) => {
      if (value !== currentState) {
        value.set(currentKey, currentState);
        onChange(returnedValues());
        localStorage.setItem(
          `${contract.address}:${identifier}`,
          JSON.stringify(Array.from(value.entries()))
        );
      }
    };

    const fetchState = async (i = 0) => {
      const currentKey = keys[i];
      if (!currentKey) {
        loading = false;
      } else {
        const currentState = await contract[identifier](currentKey);

        onChange(returnedValues());
        setState(currentKey, currentState);
        fetchState(i + 1);
      }
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
