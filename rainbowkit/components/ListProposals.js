import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { useAccount, useBlockNumber, useContractRead, useProvider, useNetwork } from "wagmi"
import { governorContractABI, governorContractAddress } from "../constants"
import { HasVoted, Proposal } from "./index"

export function ListProposals({ onlyActive, onlySuccessful, availableVoting }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const { isConnected } = useAccount()
  const provider = useProvider()
  const { data: blockNumber } = useBlockNumber({ watch: true })
  const [proposals, setProposals] = useState([])
  const [votingPeriod, setVotingPeriod] = useState(0)

  /* This could be a separate component */
  const { chain } = useNetwork()
  // console.log(chain)

  // console.log(chain);
  // console.log("Chain.id:", chain.id);

  const multichainGovernorContractAddress = governorContractAddress["31337"][0]
  // const multichainGovernorContractAddress =
  //   chain.id in governorContractAddress
  //     ? governorContractAddress[chain.id][0]
  //     : null;
  // console.log(multichainGovernorContractAddress);

  useContractRead({
    addressOrName: multichainGovernorContractAddress,
    contractInterface: governorContractABI,
    functionName: "votingPeriod",
    onSuccess(data) {
      setVotingPeriod(data.toNumber())
    },
    onError(error) {
      setError(error)
    },
  })

  useEffect(() => {
    const governorContract = new ethers.Contract(
      multichainGovernorContractAddress,
      governorContractABI,
      provider
    )
    let eventFilter = governorContract.filters.ProposalCreated()
    const blockMinusVotingPeriod = blockNumber - votingPeriod

    provider
      .getLogs({
        ...eventFilter,
        fromBlock:
          onlyActive && votingPeriod !== 0
            ? blockMinusVotingPeriod > 0
              ? blockMinusVotingPeriod
              : 0
            : "earliest",
        toBlock: "latest",
      })
      .then((logs) => {
        setIsLoading(false)
        let proposals = logs.filter((log) => {
          // What does this line do?
          const deadline = governorContract.interface.parseLog(log).args[7].toNumber()
          // If onlyActive set to true, only show the ones where deadline is greater than blockNumber
          // Else, show everything
          return onlyActive ? deadline >= blockNumber : true
        })

        // Set proposals to a map
        proposals = proposals.map((log) => {
          // So it's getting all this data
          const [proposalId, , , , , calldatas, snapshot, deadline, description] =
            governorContract.interface.parseLog(log).args
          // What is parseLog? Maybe wagmi documentation has the answer

          return {
            calldatas,
            deadline,
            description,
            proposalId,
            snapshot,
          }
        })
        setProposals(proposals)
      })
      .catch((error) => {
        setIsLoading(false)
        setError(error)
      })
  }, [blockNumber, onlyActive, provider, votingPeriod])

  return (
    <>
      {error && (
        <span className="error">
          Error: {error.message ? error.message : JSON.stringify(error)}
        </span>
      )}
      {isLoading && <span>Loading DAO proposals ...</span>}
      {proposals.length > 0 &&
        proposals.map((proposal, i) =>
          isConnected ? (
            <HasVoted proposalId={proposal.proposalId} key={i}>
              <Proposal
                key={i}
                proposal={proposal}
                availableVoting={availableVoting}
                onlySuccessful={onlySuccessful}
              />
            </HasVoted>
          ) : (
            <Proposal
              key={i}
              proposal={proposal}
              availableVoting={availableVoting}
              onlySuccessful={onlySuccessful}
            />
          )
        )}
    </>
  )
}
