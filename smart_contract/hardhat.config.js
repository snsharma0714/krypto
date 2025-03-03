// https://eth-sepolia.g.alchemy.com/v2/oiWDDsf-a_s5vRzDKEH2-U-suYPbuUo1

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url:'https://eth-sepolia.g.alchemy.com/v2/oiWDDsf-a_s5vRzDKEH2-U-suYPbuUo1',
      accounts: [ 'b2eb1970912ad5241499f7daa8920bfcb64ab6a38ade26282953faea4e177339' ]
    }
  }
};
