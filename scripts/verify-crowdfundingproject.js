const { run } = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  //replace contractAddress with the one we saved above querying the 0th publishedProj
  const contractAddress = "0x6EaD2ACeDdd8CD2d3636D10Ed2270d8C4F8cfD72"; //line5
  const args = [
     "first title", 
     ethers.parseUnits("0.1", "ether"), 
     "description",
//Insert you wallet's public address here
     "0x27f449B9869F278dad9aFCE651b58678266B6809",  //line 9

  ];

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: "contracts/crowdfunding.sol:CrowdfundingProject",
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
