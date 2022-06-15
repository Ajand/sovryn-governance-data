import { LocalStorage } from "../types";
import { ethers } from "ethers";
import { State } from "../types";

const SingleSimpleState =
  (
    localStorage: LocalStorage,
    contract: ethers.Contract,
    pollInterval: number = 15 * 60 * 1000
  ) =>
  (
    onChange: Function,
    identifier: string,
    stateName: string,
    listener?: ethers.EventFilter
  ): State => {
    var loading = true;
    var value: any = localStorage.getItem(`${contract.address}:${identifier}`)
      ? localStorage.getItem(`${contract.address}:${identifier}`)
      : undefined;

    if (value === "false") {
      value = false;
    } else if (value === "true") {
      value = true;
    }

    const setState = (currentState: any) => {
      if (value !== currentState) {
        value = currentState;
        onChange(returnedValues());
        localStorage.setItem(`${contract.address}:${identifier}`, currentState);
      }
    };

    const fetchState = async (i = 0) => {
      try {
        const currentState = await contract[identifier]();
        setState(currentState);
      } catch (err) {
        //console.log(err);
        setTimeout(() => {}, Math.floor(Math.random() * i * 60 * 1000));
      }
      loading = false;
      onChange(returnedValues());
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
