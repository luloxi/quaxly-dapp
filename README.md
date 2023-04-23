# Quaxly dApp

Quadratic voting DAO on a full stack monorepo.

- [DApp conditions](https://lulox.notion.site/Quaxly-dApp-conditions-645e66fdf6744161ae5ff97e854c175e) to be met
- [Ongoing changes](https://lulox.notion.site/Ongoing-changes-91a60bc9f6c449e6a1f163a380d575b1) next to be implemented

Inspired by [ferrodri's quadratic-voting-dao](https://github.com/ferrodri/quadratic-voting-dao)

# Index

- [Smart contracts](#smart-contracts)
  - [Setting up Hardhat](#setting-up-hardhat)
  - [Testing locally](#testing-locally)
  - [Deploying](#deploying)
- [Frontend](#frontend)
  - [Setting up interface](#setting-up-interface)
  - [Connecting to different chains](#connecting-to-different-chains)
  - [Deploying to Fleek](#deploying-to-fleek)
- [Backend](#🚧-backend-🚧-under-construction)
  - [Setting up backend](#setting-up-backend)
  - [Testing backend](#testing-backend)
- [File locations](#file-locations)
- [Troubleshooting](#troubleshooting)

# Quick setup

**Smart contracts**

1. Open a terminal on `hardhat` folder
2. Run `yarn` on hardhat folder to install dependencies.
3. Run `yarn hardhat node` to start a local blockchain that interacts with the frontend

**Interface**

1. Open a terminal on `interface` folder
2. Run `yarn` on hardhat folder to install dependencies.
3. Run `yarn dev` to start a local hosted interface
4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

# Smart contracts

## Setting up Hardhat

1. Open a terminal on `hardhat` folder
2. Run `yarn` on hardhat folder to install dependencies.
3. (optional) Run `yarn hardhat test` to run tests

## Testing locally

1. Run `yarn hardhat node` to start a local blockchain that interacts with the frontend

## Scripts

1. Run `yarn hardhat run scripts/createProposal.js` to create a proposal

## Deploying

1. Change name of file **.env.example** to **.env**
2. Fill the .env file with the **settings for the blockchain you want** to deploy to \*
3. Run the **deploy command for your blockchain** of choice

- _If you want to skip contracts verification, don't fill out the ETHERSCAN_API_KEY or POLYGONSCAN_API_KEY variables._

### Settings for Mainnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)
- MAINNET_RPC URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) ETHERSCAN_API_KEY: [Etherscan](https://info.etherscan.com/api-keys/)

### Settings for Goerli Testnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/)
- GOERLI_RPC URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) ETHERSCAN_API_KEY: [Etherscan](https://info.etherscan.com/api-keys/)
- Get some Goerli ETH here: [Chainlink Faucet](https://faucets.chain.link/) - [Alchemy Faucet](https://goerlifaucet.com/)

### Settings for Mumbai Testnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/)
- MUMBAI_RPC_URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) POLYGONSCAN_API_KEY: [Polygonscan](https://polygonscan.com/apis)
- Get some Mumbai MATIC here: [Mumbai Faucet](https://mumbaifaucet.com/)

### Deploy commands

- Mainnet: `yarn hardhat run scripts/deployAll --network mainnet`
- Goerli: `yarn hardhat run scripts/deployAll --network goerli`
- Mumbai: `yarn hardhat run scripts/deployAll --network mumbai`

# Frontend

## Setting up interface

1. Open a terminal on `interface` folder
2. Run `yarn` on hardhat folder to install dependencies.
3. Run `yarn dev` to start a local hosted interface
4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

## Connecting to different chains

Change `/constants/CurrentChain.json` default value to your desired chain name.

- Available chain names are `hardhat` `mumbai` `goerli` and `mainnet`
- Default value `hardhat` is for local testing

## Deploying to Fleek

1. Select to deploy from your repo, then choose the **Next** type
2. Input this **parameters**:

- Build command: `yarn && yarn build && yarn export`
- Publish directory: `out`
- Base directory: `interface`

# 🚧 Backend 🚧 (under construction)

## Setting up backend

1. Open a terminal on `backend` folder
2. Run `yarn` to install dependencies.
3. Run `node index.js` to start the backend

## Testing backend

1. Open a terminal on `backend` folder
2. Open [http://localhost:3001/proposals](http://localhost:3001/proposals) on your browser to make a call to the API

# File locations

## / (Root folder)

- **/concept**: Reference files for styling.
- **/backend**: Backend files. Made using Express.
- **/hardhat**: Smart contracts files. Made using Hardhat
- **/interface**: Frontend files. Made using Next.js + Wagmi + ChakraUI

## /hardhat (Smart contracts)

- **.env**: **Env**ironment variables. Located on the root folder of the project.
- **contracts/**: Contracts and libraries for those contracts.
- **deploy/**: Deploy scripts that work according to hardhat-deploy plugin.
- **scripts/**: Script to deployAll, and script to Propose as admin.
- **test/**: Unit testing for Quaxly contracts

## /interface (Frontend)

- **/components**: Custom components for Quaxly dApp.
- **/constants**: ABI and Contract addresses for deployed contracts
- **/hooks**: Custom hooks for conditional behavior
- **/pages**: Single page base files
- **/styles**: CSS modules for styling the dApp

## /backend (Backend)

- **index.js**: File with setup and functions for REST API

# Troubleshooting

## Common smart contracts problems

- Did you **set the .env file** right?
- **Did you save** after changing the .env file?
- Delete **"artifacts"** and **"cache"** folder and try again.

### "nonce too low" / Pending transaction stuck:

If you get this error when trying to use your wallet again after using it for interacting with the blockchain with this repo, it's because you used some nonces to send the transactions that deploy or interact with the contracts. In your MetaMask, go to **Settings > Advanced > Reset Account**

### Don't have yarn

- Just enter `npm install --global yarn` on your console.
- Don't have NPM either? [Get the LTS version!](https://nodejs.org/en/download/)

### (Bonus) Enable hh shorthand

`npm install --global hardhat-shorthand` to use commands like `hh node` instead of `yarn hardhat node`
