const {
  // network,
  // ethers,
} = require("hardhat")
require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { log, get } = deployments
  const { deployer } = await getNamedAccounts()

  const governorContract = await ethers.getContract("GovernorContract", deployer)
  const daoModerators = await ethers.getContract("DAOModerators", deployer)

  console.log("Transferring ownership to GovernorContract...")
  await daoModerators.transferOwnership(governorContract.address)

  console.log("Done!")

  log("-------------------------------------")
}

module.exports.tags = ["all", "transferownership"]
