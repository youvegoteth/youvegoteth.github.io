var abi = [{"inputs": [{"type": "address", "name": "_idx"}, {"type": "address", "name": "_to"}], "constant": false, "name": "claimTransfer", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "bool", "name": "_disableDeveloperTip"}, {"type": "address", "name": "_owner"}, {"type": "address", "name": "_contract"}, {"type": "uint256", "name": "_amount"}, {"type": "uint256", "name": "_fee_amount"}], "constant": false, "name": "newTransfer", "outputs": [], "payable": true, "type": "function"}, {"inputs": [{"type": "address", "name": ""}], "constant": true, "name": "transfers", "outputs": [{"type": "bool", "name": "active"}, {"type": "uint256", "name": "amount"}, {"type": "uint256", "name": "developer_tip_pct"}, {"type": "bool", "name": "initialized"}, {"type": "uint256", "name": "expiration_time"}, {"type": "address", "name": "from"}, {"type": "address", "name": "owner"}, {"type": "address", "name": "erc20contract"}, {"type": "uint256", "name": "fee_amount"}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_idx"}], "constant": false, "name": "getTransferDetails", "outputs": [{"type": "bool", "name": ""}, {"type": "uint256", "name": ""}, {"type": "uint256", "name": ""}, {"type": "bool", "name": ""}, {"type": "uint256", "name": ""}, {"type": "address", "name": ""}, {"type": "address", "name": ""}, {"type": "address", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_idx"}], "constant": false, "name": "expireTransfer", "outputs": [], "payable": false, "type": "function"}, {"inputs": [], "type": "constructor", "payable": false}, {"payable": true, "type": "fallback"}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "uint256", "name": "amount"}, {"indexed": false, "type": "address", "name": "erc20contract"}, {"indexed": false, "type": "address", "name": "index"}], "type": "event", "name": "transferSubmitted", "anonymous": false}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "uint256", "name": "amount"}, {"indexed": false, "type": "address", "name": "erc20contract"}, {"indexed": false, "type": "address", "name": "index"}], "type": "event", "name": "transferExpired", "anonymous": false}, {"inputs": [{"indexed": false, "type": "address", "name": "_to"}, {"indexed": false, "type": "uint256", "name": "amount"}, {"indexed": false, "type": "address", "name": "erc20contract"}, {"indexed": false, "type": "address", "name": "index"}], "type": "event", "name": "transferClaimed", "anonymous": false}];
var tokenabi = [{"inputs": [{"type": "address", "name": "_spender"}, {"type": "uint256", "name": "_value"}], "constant": false, "name": "approve", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "totalSupply", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_from"}, {"type": "address", "name": "_to"}, {"type": "uint256", "name": "_value"}], "constant": false, "name": "transferFrom", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_owner"}], "constant": true, "name": "balanceOf", "outputs": [{"type": "uint256", "name": "balance"}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_to"}, {"type": "uint256", "name": "_value"}], "constant": false, "name": "transfer", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_owner"}, {"type": "address", "name": "_spender"}], "constant": true, "name": "allowance", "outputs": [{"type": "uint256", "name": "remaining"}], "payable": false, "type": "function"}, {"inputs": [{"indexed": true, "type": "address", "name": "owner"}, {"indexed": true, "type": "address", "name": "spender"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Approval", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "from"}, {"indexed": true, "type": "address", "name": "to"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Transfer", "anonymous": false}];

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
var setContractSelect = function(newNum){
    setTimeout(function(){
        document.getElementById("contract").selectedIndex = newNum;        
    },100);
}

//figure out what network to point at
network_id=0; //mainnet
var etherscanDomain = 'etherscan.io';
if(getParam('network') != null){
    var newNetwork = parseInt(getParam('network'));
    localStorage.setItem('network_id', newNetwork);
    network_id = newNetwork;
} else if(localStorage.getItem('network_id') != null){
    network_id = parseInt(localStorage.getItem('network_id'));
}

//default to latest contract, unless user has a link to receive.html where addres/key are specificed but contract verseion is not.
contract_revision=1;
if(getParam('address') && getParam('key') && !getParam('contract')){
    contract_revision=0;
}
if(getParam('contract') != null){
    var newcontract = parseInt(getParam('contract'));
    localStorage.setItem('contract', newcontract);
    contract_revision = newcontract;
} else if(localStorage.getItem('contract') != null){
    contract_revision = parseInt(localStorage.getItem('contract'));
}
setContractSelect(contract_revision);

if(network_id==9){
    //testrpc
    var contract_address = '0x2094fda6b63e007794eebd5e0cb6b93813d35b9d'; 
    setNetworkSelect(2);
    etherscanDomain = 'localhost';
}
else if(network_id==3){
    //ropsten
    var contract_address = '0x0';
    if (contract_revision==0){
        contract_address = '0xE95215CdbEfDbeB58559D231E07278880FcaeC15'; //ropsten v0
    } else {
        contract_address = '0xf2520544b93a14c78e8ffec79567de9d654abfb1'; //ropsten v1
    }
    etherscanDomain = 'ropsten.etherscan.io';
    setNetworkSelect(1);    
} else {
    //mainnet
    var contract_address = '0x0';
    if (contract_revision==0){
        contract_address = '0x7aca51dbe152313987adca472ac1d033b640f771'; //mainnet v0
    } else {
        contract_address = '0xde4245af39314f1001f76352de7fc7d434e8ab94'; //mainnet v1
    }
    setNetworkSelect(0);
}
var contract = function(){
    return web3.eth.contract(abi).at(contract_address);
}
var token_contract = function(token_address){
    return web3.eth.contract(tokenabi).at(token_address);
}

var onNetworkChange = function(){
    var newNetwork = parseInt($("network").value);
    localStorage.setItem('network_id', newNetwork);
    document.location.href = '/';
}
var onContractChange = function(){
    var newcontract = parseInt($("contract").value);
    localStorage.setItem('contract', newcontract);
    document.location.href = '/';
}

