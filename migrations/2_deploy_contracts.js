var TransferIndex = artifacts.require("./contracts/TransferIndex.sol");

module.exports = function(deployer) {
  deployer.deploy(TransferIndex);
};
