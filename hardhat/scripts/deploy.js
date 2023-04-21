const { deployments, ethers } = require("hardhat")

async function main() {
  /* Get signer */

  const accounts = await ethers.getSigners()
  const deployer = accounts[0]

  // /* Deploying and setting ready for action */

  console.log("Deploying contracts...")
  await deployments.fixture("all")
  const governanceToken = await ethers.getContract("GovernanceToken", deployer)
  const governorContract = await ethers.getContract("GovernorContract", deployer)
  const daoModerators = await ethers.getContract("DAOModerators", deployer)

  console.log("GovernanceToken address:", governanceToken.address)
  console.log("GovernorContract address:", governanceToken.address)
  console.log("DAOModerators address:", governanceToken.address)

  /* Calling functions on contracts */
  await daoModerators.transferOwnership(governorContract.address)

  console.log("Deployed!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
