const { ethers } = require("ethers");

const privateKey = "f6e4b381971f9d512e164ab22696bcd9dd2abea5c5c6cb13064c5615eea7e7db";
const wallet = new ethers.Wallet(privateKey);

console.log("Public Key:", wallet.publicKey);
console.log("Address:", wallet.address);
