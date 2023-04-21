const {
  daoModeratorsAddress,
  daoModeratorsABI,
  governanceTokenAddress,
  governanceTokenABI,
  governorContractAddress,
  governorContractABI,
} = require("../helper-hardhat-config")
const { ethers, network } = require("hardhat")
const fs = require("fs")

module.exports = async () => {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Writing to front end...")
    await updateDaoModeratorsABI()
    await updateDaoModeratorsAddress()
    await updateGovernanceTokenABI()
    await updateGovernanceTokenAddress()
    await updateGovernorContractABI()
    await updateGovernorContractAddress()
    console.log("Front end written!")
  }
}

async function updateDaoModeratorsABI() {
  const daoModerators = await ethers.getContract("DAOModerators")
  fs.writeFileSync(daoModeratorsABI, daoModerators.interface.format(ethers.utils.FormatTypes.json))
}

async function updateDaoModeratorsAddress() {
  const daoModerators = await ethers.getContract("DAOModerators")
  const contractAddresses = JSON.parse(fs.readFileSync(daoModeratorsAddress, "utf8"))
  if (network.config.chainId.toString() in contractAddresses) {
    if (!contractAddresses[network.config.chainId.toString()].includes(daoModerators.address)) {
      contractAddresses[network.config.chainId.toString()].push(daoModerators.address)
    }
  } else {
    contractAddresses[network.config.chainId.toString()] = [daoModerators.address]
  }
  fs.writeFileSync(daoModeratorsAddress, JSON.stringify(contractAddresses))
}

async function updateGovernanceTokenABI() {
  const governanceToken = await ethers.getContract("GovernanceToken")
  fs.writeFileSync(
    governanceTokenABI,
    governanceToken.interface.format(ethers.utils.FormatTypes.json)
  )
}

async function updateGovernanceTokenAddress() {
  const governanceToken = await ethers.getContract("GovernanceToken")
  const contractAddresses = JSON.parse(fs.readFileSync(governanceTokenAddress, "utf8"))
  if (network.config.chainId.toString() in contractAddresses) {
    if (!contractAddresses[network.config.chainId.toString()].includes(governanceToken.address)) {
      contractAddresses[network.config.chainId.toString()].push(governanceToken.address)
    }
  } else {
    contractAddresses[network.config.chainId.toString()] = [governanceToken.address]
  }
  fs.writeFileSync(governanceTokenAddress, JSON.stringify(contractAddresses))
}

async function updateGovernorContractABI() {
  const governorContract = await ethers.getContract("GovernorContract")
  fs.writeFileSync(
    governorContractABI,
    governorContract.interface.format(ethers.utils.FormatTypes.json)
  )
}

async function updateGovernorContractAddress() {
  const governorContract = await ethers.getContract("GovernorContract")
  const contractAddresses = JSON.parse(fs.readFileSync(governorContractAddress, "utf8"))
  if (network.config.chainId.toString() in contractAddresses) {
    if (!contractAddresses[network.config.chainId.toString()].includes(governorContract.address)) {
      contractAddresses[network.config.chainId.toString()].push(governorContract.address)
    }
  } else {
    contractAddresses[network.config.chainId.toString()] = [governorContract.address]
  }
  fs.writeFileSync(governorContractAddress, JSON.stringify(contractAddresses))
}
module.exports.tags = ["all", "frontend"]
