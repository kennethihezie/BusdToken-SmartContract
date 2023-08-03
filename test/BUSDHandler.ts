import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'

const INITIAL_SUPPLY = 10000

describe("BUSD", () => {

   async function deployBusdFixture() {
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await ethers.getSigners();    
      const busdContract = await ethers.deployContract("BUSDHandler", [INITIAL_SUPPLY]);
    
      //Wait for contract to be deployed
      await busdContract.waitForDeployment(); 

      return { busdContract, owner, otherAccount}
   }
    
    
    describe("Deployment", async () => {

      it("Should set the right owner", async () => {
         const { busdContract, owner } = await loadFixture(deployBusdFixture)

         const _owner = await busdContract._owner()

         expect(_owner).to.equal(owner.address)
      })

      it("Should get sender ether balance", async () => {
         const { busdContract, owner } = await loadFixture(deployBusdFixture)

         const etherBal = await busdContract.getEtherBalance()
         console.log(`etherBal: ${etherBal}`);
      })

      it("Should get contract balance", async () => {
         const { busdContract, owner } = await loadFixture(deployBusdFixture)

         const contractBal = await busdContract.getContractBalance()
         console.log(`contractBal: ${contractBal}`);
      })
   })


     describe("BUSDToken", async () => {

        it("Should get sender busdtoken balance", async () => {
         const { busdContract, owner, otherAccount } = await loadFixture(deployBusdFixture)

         const userBal = await busdContract.getBusdBalanceOf(owner.address)
         console.log(`userBal :${userBal}`);
        })

        it("Should Transfer BUSD and get balance", async () => {
         const { busdContract, owner, otherAccount } = await loadFixture(deployBusdFixture)

         //get initial account balance
         const initialBal  = await busdContract.getBusdBalanceOf(otherAccount.address);         

         //Transfer 10 busd token to otherAccount
         (await busdContract.transferBusdToken(otherAccount.address, 10))

         //get current account balance
         const curBal = await busdContract.getBusdBalanceOf(otherAccount)         

         expect(curBal).to.equal(10n)
        })
     })
})