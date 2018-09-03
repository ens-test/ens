var Web3 = require("web3");
var PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
  networks: {
    'dev.fifs': {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    'dev.auction': {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    'env.fifs': {
      provider: new PrivateKeyProvider(
        process.env.ETHEREUM_PRIVATE_KEY.replace(/^0x/i, ""),
        process.env.ETHEREUM_HTTP),
      // from: process.env.ETHEREUM_PUBLIC_KEY,
      network_id: "*" // Match any network id
    },
    'env.auction': {
      provider: new PrivateKeyProvider(
        process.env.ETHEREUM_PRIVATE_KEY.replace(/^0x/i, ""),
        process.env.ETHEREUM_HTTP),
      // from: process.env.ETHEREUM_PUBLIC_KEY,
      network_id: "*" // Match any network id
    }
  }
};
