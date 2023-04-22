const {
  network,
  // ethers,
} = require("hardhat")
require("dotenv").config()

const { developmentChains } = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
  // If on a development chain, continue
  if (developmentChains.includes(network.name)) {
    console.log("Mining a block every five seconds for the dev-testing")
    await network.provider.send("evm_setIntervalMining", [5000])
  }

  console.log("Done!")
}

module.exports.tags = ["all", "transferownership"]
