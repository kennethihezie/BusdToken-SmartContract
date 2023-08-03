import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv'

//Created by Collins Ihezie on 03/08/203

//Configure dotenv
dotenv.config({ path: '.env' })

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
    }
  },

  //Setup different networks for deployment
  networks: {
    polygon_mumbai: {
      url: process.env.POLYGON_RPC_URL,
      accounts: {
        mnemonic: process.env.MEMONIC 
      }
    },

    testnet: {
      url: process.env.TESTNET_RPC_URL,
      chainId: 97,
      gasPrice: 1000000,
      accounts: { mnemonic: process.env.MEMONIC }
    },

    mainnet: {
      url: process.env.MAINNET_RPC_URL,
      chainId: 56,
      gasPrice: 1000000,
      accounts: { mnemonic: process.env.MEMONIC }
    }
  }
};

export default config;
