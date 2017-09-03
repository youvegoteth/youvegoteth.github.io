var TransferIndex = artifacts.require("./TransferIndex.sol");
var StrawManToken = artifacts.require("./StrawManToken.sol");

module.exports = function(deployer) {
  deployer.deploy(StrawManToken);
  deployer.deploy(TransferIndex);
};
