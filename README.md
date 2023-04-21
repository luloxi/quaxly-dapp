# Quaxly dApp

Quadratic voting DAO on a full stack monorepo.

- [dApp conditions](https://lulox.notion.site/Quaxly-dApp-conditions-645e66fdf6744161ae5ff97e854c175e) to be met
- [Ongoing changes](https://lulox.notion.site/Ongoing-changes-91a60bc9f6c449e6a1f163a380d575b1) next to be implemented

Inspired by [ferrodri's quadratic-voting-dao](https://github.com/ferrodri/quadratic-voting-dao)

# Smart contracts

Hardhat suite to test and deploy Quaxly DAO contracts.

## Setting up

1. Open a terminal on `hardhat` folder
2. Run `yarn` on hardhat folder to install dependencies.
3. (optional) Run `yarn hardhat test` to run tests
4. Change name of file **.env.example** to **.env**
5. Fill the .env file with the correct information for the blockchain you want to deploy to

_If you want to skip Etherscan verifications, don't fill out the ETHERSCAN_API_KEY or POLYGONSCAN_API_KEY variables._

### Settings for Mainnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)
- MAINNET_RPC URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) ETHERSCAN_API_KEY: [Etherscan](https://info.etherscan.com/api-keys/)

### Settings for Goerli Testnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/)
- GOERLI_RPC URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) ETHERSCAN_API_KEY: [Etherscan](https://info.etherscan.com/api-keys/)

### Settings for Mumbai Testnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/)
- MUMBAI_RPC_URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) POLYGONSCAN_API_KEY: [Polygonscan](https://polygonscan.com/apis)

## Deploying

### On testnets and mainnet

- Mainnet: `yarn hardhat run scripts/deployAll --network mainnet`
- Goerli: `yarn hardhat run scripts/deployAll --network goerli`
- Mumbai: `yarn hardhat run scripts/deployAll --network mumbai`

### On local node

1. Run `yarn hardhat node` to start a blockchain with contracts deployed
2. Run `scripts/transferOwnership.js` to integrate functionality with governance

## File locations

- **contracts/ folder**: Contracts and libraries for those contracts.
- **deploy/ folder**: Deploy scripts that work according to hardhat-deploy plugin.
- **scripts/ folder**: Script to deployAll, and script to Propose as admin.
- **.env**: **Env**ironment variables. Located on the root folder of the project.

# Frontend

## Setting up

1. Open a terminal on `rainbowkit` folder
2. Run `yarn` on hardhat folder to install dependencies.
3. Run `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) in your web browser

# Troubleshooting

## Smart contracts

- Did you **set the .env file** right?
- **Did you save** after changing the .env file?
- Delete **"artifacts"** and **"cache"** folder and try again.

### "nonce too low" / Pending transaction stuck:

If you get this error when trying to use your wallet again after using it for interacting with the blockchain with this repo, it's because you used some nonces to send the transactions that deploy or interact with the contracts. In your MetaMask, go to **Settings > Advanced > Reset Account**

### Don't have Goerli ETH/Mumbai MATIC

- Get some Goerli ETH here: [Chainlink Faucet](https://faucets.chain.link/) - [Alchemy Faucet](https://goerlifaucet.com/)
- Get some Mumbai MATIC here: [Mumbai Faucet](https://mumbaifaucet.com/)

### Don't have yarn

- Just enter `npm install --global yarn` on your console.
- Don't have NPM either? [Get the LTS version!](https://nodejs.org/en/download/)
