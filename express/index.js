const express = require("express");
const Web3 = require("web3");
const abi = require("./RealEstate.json");

const app = express();
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const contract = new web3.eth.Contract(abi, "0xContractAddress");

app.get("/properties", (req, res) => {
  contract.methods.getProperties().call((err, properties) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(properties);
    }
  });
});

// app.post("/buy-property", (req, res) => {
//   const { propertyId } = req.body;
//   contract.methods
//     .buyProperty(propertyId)
//     .send(
//       { from: "0xUserAddress", value: "1000000000000000000" },
//       (err, transactionHash) => {
//         if (err) {
//           res.status(500).send(err);
//         } else {
//           res.json({ transactionHash });
//         }
//       }
//     );
// });

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
