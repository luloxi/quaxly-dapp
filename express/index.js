const express = require("express");
const { ethers } = require("ethers");

const app = express();

const provider = new ethers.providers.JsonRpcProvider(
  "https://alchemy.com/YOUR_PROJECT_ID"
);

app.get("/proposalDeadline", async (req, res) => {
  try {
    // Fetch all existing proposals from RatherDAO contract
    const numProposals = await ratherDAOContract.methods
      .proposalDeadline()
      .call();
    const proposals = [];
    for (let i = 1; i <= numProposals; i++) {
      const proposal = await ratherDAOContract.methods
        .proposalDeadline(i)
        .call();
      proposals.push(proposal);
    }
    res.json({ proposals });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch proposals" });
  }
});

const port = 3000; // Or any other port of your choice
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
