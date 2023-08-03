import { expect } from "chai";
import { ethers } from "hardhat";

const INITIAL_SUPPLY = 10000

describe("BUSD", async () => {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    
    const busdContract = await ethers.deployContract("BUSDHandler", [INITIAL_SUPPLY]);
   
    //Wait for contract to be deployed
    await busdContract.waitForDeployment(); 
    
    describe("Deployment", async () => {
      it("Should set the right owner", async () => {
         const _owner = await busdContract._owner()

         expect(_owner).to.equal(owner.address)
      })

      it("Should get sender ether balance", async () => {
         const etherBal = await busdContract.getEtherBalance()
         console.log(etherBal);
      })

      it("Should get contract balance", async () => {
         const contractBal = await busdContract.getContractBalance()
         console.log(contractBal);
      })
   })


     describe("BUSDToken", async () => {
        it("Should get sender busdtoken balance", async () => {
         const userBal = await busdContract.getBusdBalanceOf(owner.address)
         console.log(userBal);
        })

        it("Should Transfer BUSD and get balance", async () => {
         //get initial account balance
         const initialBal  = await busdContract.getBusdBalanceOf(otherAccount.address);

         //Transfer 10 busd token to otherAccount
         (await busdContract.transferBusdToken(otherAccount.address, 10))

         //get current account balance
         const curBal = await busdContract.getBusdBalanceOf(otherAccount)

         expect(curBal).to.equal(initialBal)
        })
     })
})