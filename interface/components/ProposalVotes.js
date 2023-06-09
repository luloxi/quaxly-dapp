import { useState } from "react"
import { useContractRead } from "wagmi"
import { CheckIcon, CloseIcon, MinusIcon } from "@chakra-ui/icons"
import { GovernorContractABI, governorContractAddress, CurrentChain, ChainList } from "../constants"

export function ProposalVotes({ proposalId }) {
  /* Replace with an automatic solution */
  let currentChain = ChainList[CurrentChain["default"]]
  const GovernorContractAddress = governorContractAddress[currentChain][0]

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [abstainVotes, setAbstainVotes] = useState(0)
  const [againstVotes, setAgainstVotes] = useState(0)
  const [forVotes, setForVotes] = useState(0)

  useContractRead({
    addressOrName: GovernorContractAddress,
    contractInterface: GovernorContractABI,
    functionName: "proposalVotes",
    args: proposalId,
    onSuccess(data) {
      const { abstainVotes: _abstainVotes, againstVotes: _againstVotes, forVotes: _forVotes } = data
      setAbstainVotes(_abstainVotes.toNumber())
      setAgainstVotes(_againstVotes.toNumber())
      setForVotes(_forVotes.toNumber())
      setIsLoading(false)
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
      {isLoading && <p>Loading proposal votes ...</p>}
      <p>
        <CheckIcon color="green" /> <b>For: </b>
        {forVotes} votes
      </p>
      <p>
        <CloseIcon color="red" /> <b>Against: </b>
        {againstVotes} votes
      </p>
      <p>
        <MinusIcon /> <b>Abstain: </b>
        {abstainVotes} votes
      </p>
    </>
  )
}
