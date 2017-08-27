
window.onload = function () {
// address is owner, hash is private key
    $("idx_address").value = getParam('address');
    $("hash").value = getParam('hash');

    // When 'Generate Account' is clicked
    $("send").onclick = function() {
        //setup
        var fromAccount = web3.eth.accounts[0];

        //get form data
        var email = $("email").value;
        var amount = $("amount").value * weiPerEther;
        var _disableDeveloperTip = !$("tip").checked;

        //generate ephemeral account
        var _owner = $("idx_address").value;
        var _private_key = $("hash").value;

        //set up callback for web3 call to newTransfer
        var callback = function(error, result){
            if(error){
                console.log(error);
                alert('got an error :(');
            } else {
                $("send_eth").style.display = 'none';
                $("send_eth_done").style.display = 'block';
                $("trans_id").innerHTML = result;
                $("priv_key").innerHTML = _private_key;
                $("address").innerHTML = _owner;
                $("continue").href = "receive.html?key=" + _private_key + "&address=" + _owner;
                //get new balances of accounts
                var refreshBalances = function(){
                    web3.eth.getBalance(_owner,function(errors,result){
                        $("ephemeral_balance").innerHTML = result;
                    });
                    web3.eth.getBalance(fromAccount,function(errors,result){
                        $("from_balance").innerHTML = result;
                    });
                    setTimeout(refreshBalances, 1000);
                };
                refreshBalances();
            }
        };

        //send transfer to web3
        contract().newTransfer.estimateGas(_disableDeveloperTip, _owner, function(error, result){
            var _gas = result;
            if (_gas > maxGas){
                _gas = maxGas;
            }
            var _gasLimit = _gas * 1.01;
            contract().newTransfer.sendTransaction(
                _disableDeveloperTip,
                _owner,
                {from :fromAccount,
                    gas: _gas,
                    value: amount,
                    gasLimit: _gasLimit,
                    gasPrice: gasPrice},
            callback);
        });
    };

};
