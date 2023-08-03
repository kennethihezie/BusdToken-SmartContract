import { ethers } from "hardhat";

const INITIAL_SUPPLY = 10000

async function main() {
   const busdContract = await ethers.deployContract("BUSDHandler", [INITIAL_SUPPLY])
   await busdContract.waitForDeployment()

   console.log("Contract Address:", busdContract.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
