const {
  // network,
  // ethers,
} = require("hardhat")
require("dotenv").config()

const {
  developmentChains,
  DAO_MODERATORS: { NEW_MODERATORS, SET_NEW_MODERATOR_FN },
} = require("../helper-hardhat-config")

const createProposal = async (GovernorContract, DAOModerators, moderatorIndex) => {
  const { calldata, description } = getProposalData(DAOModerators, moderatorIndex)

  const [{ address: owner }] = await ethers.getSigners()

  const tx = await GovernorContract.propose([DAOModerators.address], [0], [calldata], description)
  const receipt = await tx.wait()

  const createProposalEvent = receipt.events?.filter((e) => e.event === "ProposalCreated")

  return {
    calldata,
    status: receipt.status,
    owner,
    proposalId: createProposalEvent[0].args.proposalId,
  }
}

const getProposalData = (DAOModerators, moderatorIndex) => {
  const { NAME, EMAIL, MODERATOR_ADDRESS } = NEW_MODERATORS[moderatorIndex]
  return {
    calldata: DAOModerators.interface.encodeFunctionData(SET_NEW_MODERATOR_FN, [
      NAME,
      EMAIL,
      MODERATOR_ADDRESS,
    ]),
    description: `Proposing moderator ${NAME} with email ${EMAIL} and wallet address ${MODERATOR_ADDRESS}`,
  }
}

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { log, get } = deployments
  const { deployer } = await getNamedAccounts()

  const governorContract = await ethers.getContract("GovernorContract", deployer)
  const daoModerators = await ethers.getContract("DAOModerators", deployer)
  const governanceToken = await ethers.getContract("GovernanceToken", deployer)

  // If on a development chain, continue
  if (developmentChains.includes(network.name)) {
    console.log("Delegating voting power to self (read ERC20Votes docs for more info)...")
    await governanceToken.delegate(deployer)

    console.log("Creating sample proposals...")
    await createProposal(governorContract, daoModerators, 0)
    await createProposal(governorContract, daoModerators, 1)
  }

  console.log("Done!")

  log("-------------------------------------")
}

module.exports.tags = ["all", "transferownership"]
