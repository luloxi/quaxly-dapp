import React from "react"
import { useState } from "react"
import { useAccount, useContractRead } from "wagmi"
import { GovernorContractABI, governorContractAddress } from "../constants"

export function HasVoted({ children, proposalId }) {
  /* Replace with a dynamic chain component */
  const GovernorContractAddress = governorContractAddress["31337"][0]

  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [hasVoted, setHasVoted] = useState(false)

  useContractRead({
    addressOrName: GovernorContractAddress,
    contractInterface: GovernorContractABI,
    functionName: "hasVoted",
    args: [proposalId, address],
    onSuccess(data) {
      setIsLoading(false)
      setHasVoted(data)
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
      {isLoading && <span>Loading if account has voted...</span>}
      {React.cloneElement(children, { hasVoted: hasVoted })}
    </>
  )
}