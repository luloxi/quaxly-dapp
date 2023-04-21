const createProposal = async (GovernorContract, GovernanceToken, DAOModerators, moderatorIndex) => {
  const calldata = getCalldata(DAOModerators, moderatorIndex)
  // eslint-disable-next-line no-undef
  const [{ address: owner }] = await ethers.getSigners()
  await GovernanceToken.delegate(owner)

  const tx = await GovernorContract.propose(
    [DAOModerators.address],
    [0],
    [calldata],
    proposalDescription
  )
  const receipt = await tx.wait()

  const createProposalEvent = receipt.events?.filter((e) => e.event === "ProposalCreated")

  return {
    calldata,
    status: receipt.status,
    owner,
    proposalId: createProposalEvent[0].args.proposalId,
  }
}

const writeProposal = async function () {
  const { proposalId } = await createProposal(governorContract, governanceToken, daoModerators, 0)

  let _proposalState = await governorContract.state(proposalId)
  expect(_proposalState).to.equal(proposalState.pending)

  // If development chains blabla
  await moveBlocks(INITIAL_VOTING_DELAY + 1)

  _proposalState = await governorContract.state(proposalId)
  expect(_proposalState).to.equal(proposalState.active)
}
