import { LocalStorage } from "../types";
import { ethers } from "ethers";
import { State } from "../types";
import RequestQueue from "./RequestQueue";

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
    const requestQueue = RequestQueue.getInstance();

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
        console.log(`State fetched`);
        setState(currentState);
      } catch (err) {
        //console.log(err);
        setTimeout(() => {}, Math.floor(Math.random() * i * 60 * 1000));
      }
      loading = false;
      onChange(returnedValues());
    };

    //setTimeout(() => {
    //  fetchState();
    //}, Math.floor(Math.random() * 4 * 60 * 1000));

    if (value) {
      setTimeout(() => {
        requestQueue.pushRequest(fetchState);
      }, 40 * 1000);
    } else {
      requestQueue.pushRequest(fetchState);
    }

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
