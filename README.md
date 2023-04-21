# Quaxly DAO

Quadratic voting DAO on a full stack monorepo

# Smart contracts

Suite to deploy and test Quaxly DAO contracts.

## Setting up

1. Open a terminal on `hardhat` folder
2. Run `yarn` on hardhat folder to install dependencies.
3. Change name of file **.env.example** to **.env**
4. [Fill the .env with variables](#filling-the-env-file) for the blockchain you want to deploy to

## Deploying

### On testnet/mainnet

- Run `yarn hardhat run scripts/deployAll --network BLOCKCHAIN_NAME_HERE` but replacing BLOCKCHAIN_NAME_HERE for `mumbai`, `goerli`, or `mainnet`

### On local node

- Run `yarn hardhat node` to start a blockchain with contracts deployed

In a future version this may be prompted by the script

## Testing

- Run `yarn hardhat test`

In a future version this may include staging tests

## Filling the .env file

If you wanna skip Etherscan verifications, don't fill out the ETHERSCAN_API_KEY or POLYGONSCAN_API_KEY variables.

### Deploying to Mainnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)
- MAINNET_RPC URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) ETHERSCAN_API_KEY: [Etherscan](https://info.etherscan.com/api-keys/)

### Deploying to Goerli Testnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/)
- GOERLI_RPC URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) ETHERSCAN_API_KEY: [Etherscan](https://info.etherscan.com/api-keys/)

### Deploying to Mumbai Testnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/)
- MUMBAI_RPC_URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) POLYGONSCAN_API_KEY: [Register and get one](https://polygonscan.com/apis)

## File locations

- **contracts/ folder**: Contracts and libraries for those contracts.
- **deploy/ folder**: Deploy scripts that work according to hardhat-deploy plugin.
- **scripts/ folder**: Script to deployAll, and script to Propose as admin.
- **.env**: **Env**ironment variables. Located on the root folder of the project.

For any troubles, visit the [Troubleshooting](#troubleshooting) section.

## Troubleshooting

### General errors

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
