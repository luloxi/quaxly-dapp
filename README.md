# Quaxly DAO

Suite to deploy and test Quaxly DAO contracts.

# Smart contracts

1. Open a terminal on `hardhat` folder
2. Run `yarn` on hardhat folder to install dependencies.
3. Change name of file **.env.example** to **.env**
4. Fill in the corresponding variables to the blockchain you want to deploy to

## Filling the .env file

If you wanna skip Etherscan verifications, don't fill out the ETHERSCAN_API_KEY or POLYGONSCAN_API_KEY variables.

### Deploying to Mainnet

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)
- MAINNET_RPC URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) ETHERSCAN_API_KEY: [Etherscan](https://info.etherscan.com/api-keys/)

### Deploying to Goerli

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/)
- GOERLI_RPC URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) ETHERSCAN_API_KEY: [Etherscan](https://info.etherscan.com/api-keys/)

### Deploying to Mumbai

- PRIVATE_KEY: [Metamask](https://metamask.zendesk.com/hc/en-us/articles/)
- MUMBAI_RPC_URL: [Alchemy (step 1 and 2)](https://www.alchemy.com/overviews/private-rpc-endpoint)
- (optional) POLYGONSCAN_API_KEY: [Register and get one](https://polygonscan.com/apis)

## File locations

- **contracts/ folder**: Original and attacker contracts are inside the same file
- **deploy/ folder**: Deploy scripts for attacks that require deploying another contract
- **scripts/ folder**: Scripts that run the entire attack from start to finish (pwn)
- **.env**: **Env**ironment variables. Located on the root folder of the project.

For any troubles, visit the [Troubleshooting](#troubleshooting) section.

## Troubleshooting

### General errors

- Did you **set the .env file** right?
- **Did you save** after changingthe .env file?
- Delete **"artifacts"** and **"cache"** folder and try again.

### "nonce too low" / Pending transaction stuck:

If you get this error when submitting level instance, it's because you used some nonces to send the transactions that attack the level. In your MetaMask, go to **Settings > Advanced > Reset Account**

### Don't have Goerli ETH/Mumbai MATIC

- Get some Goerli ETH here: [Chainlink Faucet](https://faucets.chain.link/) - [Alchemy Faucet](https://goerlifaucet.com/)
- Get some Mumbai MATIC here: [Mumbai Faucet](https://mumbaifaucet.com/)

### Don't have yarn

- Just enter `npm install --global yarn` on your console.
- Don't have NPM either? [Get the LTS version!](https://nodejs.org/en/download/)
