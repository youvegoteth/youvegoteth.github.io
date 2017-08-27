var abi = [{"inputs": [{"type": "address", "name": "_idx"}, {"type": "address", "name": "_to"}], "constant": false, "name": "claimTransfer", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": ""}], "constant": true, "name": "transfers", "outputs": [{"type": "bool", "name": "active"}, {"type": "uint256", "name": "amount"}, {"type": "uint256", "name": "developer_tip_pct"}, {"type": "bool", "name": "initialized"}, {"type": "uint256", "name": "expiration_time"}, {"type": "address", "name": "from"}, {"type": "address", "name": "owner"}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_idx"}], "constant": false, "name": "getTransferDetails", "outputs": [{"type": "bool", "name": ""}, {"type": "uint256", "name": ""}, {"type": "uint256", "name": ""}, {"type": "bool", "name": ""}, {"type": "uint256", "name": ""}, {"type": "address", "name": ""}, {"type": "address", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "bool", "name": "_disableDeveloperTip"}, {"type": "address", "name": "_owner"}], "constant": false, "name": "newTransfer", "outputs": [], "payable": true, "type": "function"}, {"inputs": [{"type": "address", "name": "_idx"}], "constant": false, "name": "expireTransfer", "outputs": [], "payable": false, "type": "function"}, {"inputs": [], "type": "constructor", "payable": false}, {"payable": true, "type": "fallback"}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "uint256", "name": "amount"}, {"indexed": false, "type": "bytes32", "name": "index"}], "type": "event", "name": "transferSubmitted", "anonymous": false}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "uint256", "name": "amount"}, {"indexed": false, "type": "bytes32", "name": "index"}], "type": "event", "name": "transferExpired", "anonymous": false}, {"inputs": [{"indexed": false, "type": "address", "name": "_to"}, {"indexed": false, "type": "uint256", "name": "amount"}, {"indexed": false, "type": "bytes32", "name": "index"}], "type": "event", "name": "transferClaimed", "anonymous": false}];

function getParam(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

var setNetworkSelect = function(newNum){
    setTimeout(function(){
        document.getElementById("network").selectedIndex = newNum;        
    },100);
}

network_id=0; //mainnet
var etherscanDomain = 'etherscan.io';
if(getParam('network') != null){
    var newNetwork = parseInt(getParam('network'));
    localStorage.setItem('network_id', newNetwork);
    network_id = newNetwork;
} else if(localStorage.getItem('network_id') != null){
    network_id = parseInt(localStorage.getItem('network_id'));
}

if(network_id==9){
    //testrpc
    var contract_address = '0x2094fda6b63e007794eebd5e0cb6b93813d35b9d'; 
    setNetworkSelect(2);
    etherscanDomain = 'localhost';
}
else if(network_id==3){
    //ropsten
    var contract_address = '0x541ae91cc160b92d136e15ec86549c99628a5a96'; //ropsten OG
    var contract_address = '0xE95215CdbEfDbeB58559D231E07278880FcaeC15'; //ropsten latest
    etherscanDomain = 'ropsten.etherscan.io';
    setNetworkSelect(1);    
} else {
    //mainnet
    var contract_address = '0x7aca51dbe152313987adca472ac1d033b640f771'; 
    setNetworkSelect(0);
}
var contract = function(){
    return web3.eth.contract(abi).at(contract_address);
}

var onNetworkChange = function(){
    var newNetwork = parseInt($("network").value);
    localStorage.setItem('network_id', newNetwork);
    document.location.href = '/';
}