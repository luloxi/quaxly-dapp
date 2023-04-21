import { useState } from "react"
import { useAccount, useContractRead, useNetwork } from "wagmi"
import { governanceTokenABI, governanceTokenAddress } from "../constants"
import { LockIcon } from "@chakra-ui/icons"

export function TotalVotingPower() {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(true)
  const [totalVoting, setTotalVoting] = useState(0)
  const [error, setError] = useState("")

  /* This could be a separate component */
  const { chain } = useNetwork()

  // console.log(chain);
  // console.log("Chain.id:", chain.id);

  const multichainGovernanceTokenAddress = governanceTokenAddress["31337"][0]
  // const multichainGovernorContractAddress =
  //   chain.id in governorContractAddress
  //     ? governorContractAddress[chain.id][0]
  //     : null;
  // console.log(multichainGovernorContractAddress);

  useContractRead({
    addressOrName: multichainGovernanceTokenAddress,
    contractInterface: governanceTokenABI,
    functionName: "balanceOf",
    args: address,
    onSuccess(data) {
      setIsLoading(false)
      setTotalVoting(data.toNumber())
    },
    onError(error) {
      setIsLoading(false)
      setError(error)
    },
    watch: true,
  })

  return (
    <>
      {error && (
        <span className="error">
          Error: {error.message ? error.message : JSON.stringify(error)}
        </span>
      )}
      {isLoading && <span>Loading total voting power balance ...</span>}
      <p>
        <LockIcon /> <b>Total voting power:</b> {totalVoting} votes
      </p>
    </>
  )
}
