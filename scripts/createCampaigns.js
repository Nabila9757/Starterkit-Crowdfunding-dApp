const { ethers } = require("hardhat");

async function main() {
const contract = await ethers.getContractAt("CrowdFactory",
//add the contract address that you just deployed in the last step
"0x6EaD2ACeDdd8CD2d3636D10Ed2270d8C4F8cfD72") //line 6

await contract.createProject(
"first title", 
ethers.utils.parseUnits("0.1", 18), 
"description", 
//insert your wallet's public key
"0x27f449B9869F278dad9aFCE651b58678266B6809") //line 13
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

