# BUSDHandler SmartContract

This project contains the implementation BUSD Token smart contract.

# Steps to setup and deploy BUSDHandler SmartContract
```
=> git clone https://github.com/kennethihezie/BusdToken-SmartContract.git

=> cd BusdToken-SmartContract

=> npm install

=> run ./test_script.sh in a shell terminal to execute test cases for the smart contract

=> run ./testnet_deploy.sh in a shell terminal to deploy contract to testnet. Contract can be deployed to bsc testnet, bsc mainnet and ploygon munbai network. By default its set to bsc testnet, to deploy to a different network, kindly edit the ./testnet_deploy.sh and add the preferred network.
```

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
