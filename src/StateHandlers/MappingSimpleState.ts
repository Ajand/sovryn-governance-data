import { LocalStorage } from "../types";
import { ethers } from "ethers";
import { State } from "../types";

const SingleSimpleState =
  (
    localStorage: LocalStorage,
    contract: ethers.Contract,
    pollInterval: number = 5 * 60 * 1000
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
        value.set(
          currentKey,
          currentState instanceof ethers.BigNumber
            ? currentState.toString()
            : String(currentState)
        );
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
        try {
          const currentState = await contract[identifier](currentKey);
          onChange(returnedValues());
          setState(currentKey, currentState);
        } catch (err) {}

        setTimeout(() => {
          fetchState(i + 1);
        }, Math.random() * 1000 * i + 1);
      }
    };

    setTimeout(() => {
      fetchState();
    }, Math.floor(Math.random() * 4 * 60 * 1000));

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
