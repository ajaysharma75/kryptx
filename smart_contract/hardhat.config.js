// https://eth-goerli.g.alchemy.com/v2/deCXliuihHYIXOnvw2-OgFvFS0ZxtUK6

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.15',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/deCXliuihHYIXOnvw2-OgFvFS0ZxtUK6",
      accounts: [ 'ac22aff2efda61f06d0dc4d65c434541ac2a4e0956c4e19603c2e5ac69375396']
    }
  }
}