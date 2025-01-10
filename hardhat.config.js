require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'citrea',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    citrea: {
      url: 'https://rpc.testnet.citrea.xyz',
      accounts: [process.env.NEXT_PUBLIC_PRIVATE_KEY],
      chainId: 5115,
    },

  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
