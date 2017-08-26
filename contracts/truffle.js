var bip39 = require("bip39");
var hdkey = require('ethereumjs-wallet/hdkey');
var ProviderEngine = require("web3-provider-engine");
var WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
var Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
var Web3 = require("web3");

// Get our mnemonic and create an hdwallet
var mnemonic = "solve couch unique spirit wine occur fine rhythm foot feature glory away";
var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));

// Get the first account using the standard hd path.
var wallet_hdpath = "m/44'/60'/0'/0/";
var wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet();
var address = "0x" + wallet.getAddress().toString("hex");

console.log(address);

var providerUrl = "https://testnet.infura.io";
var engine = new ProviderEngine();
engine.addProvider(new WalletSubprovider(wallet, {}));
engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrl)));
engine.start(); // Required by the provider engine.

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    ropsten: {
          network_id: 3,    // Official ropsten network id
          provider: engine, // Use our custom provider
          from: address     // Use the address we derived
        },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
