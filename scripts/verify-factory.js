const { run } = require("hardhat");

async function main() {
//add the contract address that you deployed in the prev steps
  const contractAddress = "0x6EaD2ACeDdd8CD2d3636D10Ed2270d8C4F8cfD72"; //line 5

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: [],
      contract: "contracts/crowdfunding.sol:CrowdFactory",
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
