var TransferIndex = artifacts.require("./TransferIndex.sol");

module.exports = function(deployer) {
  deployer.deploy(TransferIndex);
};
