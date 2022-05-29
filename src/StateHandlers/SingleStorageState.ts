import { LocalStorage } from "../types";
import { ethers } from "ethers";
import { State } from "../types";
import { toAscii } from "web3-utils";

const SingleSimpleState =
  (
    localStorage: LocalStorage,
    contract: ethers.Contract,
    pollInterval: number = 30 * 1000
  ) =>
  (
    onChange: Function,
    position: string,
    stateName: string,
    listener?: ethers.EventFilter
  ): State => {
    var loading = true;
    var value: any = localStorage.getItem(
      `${contract.address}:storageAt${position}`
    )
      ? localStorage.getItem(`${contract.address}:storageAt${position}`)
      : undefined;

    const setState = (currentState: any) => {
      if (value !== currentState) {
        value = currentState;
        onChange(returnedValues());
        localStorage.setItem(
          `${contract.address}:storageAt${position}`,
          currentState
        );
      }
    };

    const fetchState = async () => {
      try {
        const currentState = await contract.provider.getStorageAt(
          contract.address,
          position
        );
        console.log(currentState);
        setState(toAscii(currentState));
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

    const returnedValues = () => {
      return {
        loading,
        value,
        identifier: `positionAt:${position}`,
        name: stateName,
      };
    };

    return returnedValues();
  };

export default SingleSimpleState;
