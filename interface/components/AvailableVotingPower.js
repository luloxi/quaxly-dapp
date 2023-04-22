import React from "react";
import { useState } from "react";
import { useContractRead } from "wagmi";
import { GovernorContractABI, governorContractAddress } from "../constants";

export function AvailableVotingPower({ children }) {
  /* Replace with a dynamic chain component */
  const GovernorContractAddress = governorContractAddress["31337"][0];

  const [isLoading, setIsLoading] = useState(true);
  const [availableVoting, setAvailableVoting] = useState(0);
  const [error, setError] = useState("");

  useContractRead({
    addressOrName: GovernorContractAddress,
    contractInterface: GovernorContractABI,
    functionName: "getAvailableVotingPower",
    onSuccess(data) {
      setIsLoading(false);
      setAvailableVoting(data.toNumber());
    },
    onError(error) {
      setIsLoading(false);
      setError(error);
    },
    watch: true,
  });

  return (
    <>
      {error && (
        <span className="error">
          Error: {error.message ? error.message : JSON.stringify(error)}
        </span>
      )}
      {isLoading && <span>Loading available voting power...</span>}
      {React.cloneElement(children, { availableVoting: availableVoting })}
    </>
  );
}
