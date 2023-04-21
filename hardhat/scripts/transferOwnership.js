const { deployments, ethers } = require("hardhat")

async function main() {
  /* Get signer */

  const accounts = await ethers.getSigners()
  const deployer = accounts[0]

  // /* Deploying and setting ready for action */

  console.log("Transferring ownership to GovernorContract...")
  const governorContract = await ethers.getContract("GovernorContract", deployer)
  const daoModerators = await ethers.getContract("DAOModerators", deployer)

  /* Calling functions on contracts */
  await daoModerators.transferOwnership(governorContract.address)

  console.log("Done!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
