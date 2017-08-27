setTimeout(function(){
    if(!web3.currentProvider.isMetaMask){
        alert("You must install Metamask to use this tool.");
    }
},1000);