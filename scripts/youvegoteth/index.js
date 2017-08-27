var abi = [{"inputs": [{"type": "address", "name": "_idx"}, {"type": "address", "name": "_to"}], "constant": false, "name": "claimTransfer", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": ""}], "constant": true, "name": "transfers", "outputs": [{"type": "bool", "name": "active"}, {"type": "uint256", "name": "amount"}, {"type": "uint256", "name": "developer_tip_pct"}, {"type": "bool", "name": "initialized"}, {"type": "uint256", "name": "expiration_time"}, {"type": "address", "name": "from"}, {"type": "address", "name": "owner"}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_idx"}], "constant": false, "name": "getTransferDetails", "outputs": [{"type": "bool", "name": ""}, {"type": "uint256", "name": ""}, {"type": "uint256", "name": ""}, {"type": "bool", "name": ""}, {"type": "uint256", "name": ""}, {"type": "address", "name": ""}, {"type": "address", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "bool", "name": "_disableDeveloperTip"}, {"type": "address", "name": "_owner"}], "constant": false, "name": "newTransfer", "outputs": [], "payable": true, "type": "function"}, {"inputs": [{"type": "address", "name": "_idx"}], "constant": false, "name": "expireTransfer", "outputs": [], "payable": false, "type": "function"}, {"inputs": [], "type": "constructor", "payable": false}, {"payable": true, "type": "fallback"}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "uint256", "name": "amount"}, {"indexed": false, "type": "bytes32", "name": "index"}], "type": "event", "name": "transferSubmitted", "anonymous": false}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "uint256", "name": "amount"}, {"indexed": false, "type": "bytes32", "name": "index"}], "type": "event", "name": "transferExpired", "anonymous": false}, {"inputs": [{"indexed": false, "type": "address", "name": "_to"}, {"indexed": false, "type": "uint256", "name": "amount"}, {"indexed": false, "type": "bytes32", "name": "index"}], "type": "event", "name": "transferClaimed", "anonymous": false}];
network_id=9;
if(network_id==9){
    var contract_address = '0x2094fda6b63e007794eebd5e0cb6b93813d35b9d'; //testrpc
}
else if(network_id==3){
    var contract_address = '0x541ae91cc160b92d136e15ec86549c99628a5a96'; //ropsten OG
    var contract_address = '0xE95215CdbEfDbeB58559D231E07278880FcaeC15'; //ropsten latest
    
} else {
    var contract_address = '0x7aca51dbe152313987adca472ac1d033b640f771'; //mainnet
}
var contract = function(){
    return web3.eth.contract(abi).at(contract_address);
}
