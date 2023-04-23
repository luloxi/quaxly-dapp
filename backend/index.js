const ethers = require("ethers");
const express = require("express");
const app = express();
const {
  GovernorContractABI,
  governorContractAddress,
  CurrentChain,
  ChainList,
} = require("../interface/constants");

// To be updated with an Ethereum node URL for production
const provider = ethers.getDefaultProvider("http://localhost:8545");

/* Replace with an automatic solution */
let currentChain = ChainList[CurrentChain["default"]];
const GovernorContractAddress = governorContractAddress[currentChain][0];

// Create contract instance
const contract = new ethers.Contract(
  GovernorContractAddress,
  GovernorContractABI,
  provider
);

// Route for getting proposals
app.get("/proposals", async (req, res) => {
  try {
    // Filter events for ProposalCreated
    const filter = contract.filters.ProposalCreated();
    const events = await contract.queryFilter(filter);

    // Show each proposal event
    console.log(events);

    // Extract proposals from events
    const proposals = events.map((event) => {
      // Convert BigInt values to strings
      return {
        calldatas: event.args[event.args.length - 3].toString(),
        deadline: event.args[event.args.length - 2].toString(),
        description: event.args[event.args.length - 1].toString(),
        proposalId: event.args.proposalId.toString(),
        snapshot: event.args[event.args.length - 4].toString(),
        // Add other properties and convert BigInt values to strings if needed
      };
    });

    res.json(proposals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get proposals" });
  }
});

// Start Express server
app.listen(3003, () => {
  console.log("Server is running on http://localhost:3000");
});