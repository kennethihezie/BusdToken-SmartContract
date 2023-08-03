import { ethers } from "hardhat";

//Created by Collins Ihezie on 03/08/203

//Defined a constant variable for initialSupply of BUSDToken
const INITIAL_SUPPLY = 10000

// Deploy contract
async function main() {
    
   //Get signers
   const [deployer] = await ethers.getSigners()

   console.log("Deploying contracts with the account:", deployer.address);

   //Deploy BUSDHandler contract
   const busdContract = await ethers.deployContract("BUSDHandler", [INITIAL_SUPPLY])

   //Resolve to this Contract once the bytecode has been deployed
   await busdContract.waitForDeployment()

   console.log("Contract Address:", busdContract.target)
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
