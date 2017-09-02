var TransferIndex = artifacts.require("./TransferIndex.sol");
var StandardContract = artifacts.require("./zeppelin/StandardToken.sol");

module.exports = function(deployer) {
  deployer.deploy(StandardContract);
  deployer.deploy(TransferIndex);
};
