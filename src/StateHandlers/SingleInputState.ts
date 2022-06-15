import { LocalStorage } from "../types";
import { ethers } from "ethers";
import { State } from "../types";

import RequestQueue from "./RequestQueue";

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
    param: string,
    listener?: ethers.EventFilter
  ): State => {
    var loading = true;
    const requestQueue = RequestQueue.getInstance();
    var value: any = localStorage.getItem(
      `${contract.address}:${identifier}:${param}`
    )
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
        localStorage.setItem(
          `${contract.address}:${identifier}:${param}`,
          currentState
        );
      }
    };

    const fetchState = async (i = 0) => {
      try {
        const currentState = await contract[identifier](param);
        console.log(`State fetched`);
        setState(currentState);
      } catch (err) {
        //console.log(err);
        setTimeout(() => fetchState(i + 1), Math.floor(Math.random() * 2000));
      }
      loading = false;
      onChange(returnedValues());
    };

    //setTimeout(() => {
    //  fetchState();
    //}, Math.floor(Math.random() * 4 * 60 * 1000));

    requestQueue.pushRequest(fetchState);

    const pollState = () => {
      setInterval(() => {
        requestQueue.pushRequest(fetchState);
      }, pollInterval);
    };

    const stateListener = () => {
      contract.on(listener, () => {
        requestQueue.pushRequest(fetchState);
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
