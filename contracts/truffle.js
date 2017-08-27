var bip39 = require("bip39");
var hdkey = require('ethereumjs-wallet/hdkey');
var ProviderEngine = require("web3-provider-engine");
var WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
var Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
var Web3 = require("web3");

// Get our mnemonic and create an hdwallet
var mnemonic = "solve couch unique spirit wine occur fine rhythm foot feature glory away";
var mnemonic = "SECRET_MAINNET_MNEMONIC_GOES_HERE";
var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));

// Get the first account using the standard hd path.
var wallet_hdpath = "m/44'/60'/0'/0/";
var wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet();
var address = "0x" + wallet.getAddress().toString("hex");

console.log(address);

var providerUrl = "https://testnet.infura.io";
var testnet_engine = new ProviderEngine();
testnet_engine.addProvider(new WalletSubprovider(wallet, {}));
testnet_engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrl)));
testnet_engine.start(); // Required by the provider engine.

var providerUrl = "https://mainnet.infura.io";
var mainnet_engine = new ProviderEngine();
mainnet_engine.addProvider(new WalletSubprovider(wallet, {}));
mainnet_engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrl)));
mainnet_engine.start(); // Required by the provider engine.

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    ropsten: {
          network_id: 3,    // Official ropsten network id
          provider: testnet_engine, // Use our custom provider
          from: address     // Use the address we derived
        },
    mainnet: {
          network_id: 1,    // Official mainnet network id
          provider: mainnet_engine, // Use our custom provider
          from: address     // Use the address we derived
        },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
