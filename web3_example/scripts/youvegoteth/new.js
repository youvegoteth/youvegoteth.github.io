
window.onload = function () {

    // When 'Generate Account' is clicked
    $("new").onclick = function() {
        //setup
        var fromAccount = web3.eth.accounts[0];

        //get form data
        var email = $("email").value;
        var amount = $("amount").value * weiPerEther;
        var _disableDeveloperTip = !$("tip").checked;

        //generate ephemeral account
        var newAccount = Accounts.new(passphrase);
        var _owner = newAccount.address;

        //set up callback for web3 call to newTransfer
        var callback = function(error, result){
            if(error){
                alert('got an error :(');
            } else {
                $("send_eth").style.display = 'none';
                $("send_eth_done").style.display = 'block';
                $("trans_id").innerHTML = result;
                $("priv_key").innerHTML = newAccount.hash;
                $("address").innerHTML = _owner;
                $("continue").href = "receive.html?key=" + newAccount.hash + "&address=" + _owner;
                //get new balances of accounts
                web3.eth.getBalance(_owner,function(errors,result){
                    $("ephemeral_balance").innerHTML = result;
                });
                web3.eth.getBalance(fromAccount,function(errors,result){
                    $("from_balance").innerHTML = result;
                });
            }
        };

        //send transfer to web3
        contract.newTransfer.sendTransaction(
            _disableDeveloperTip,
            _owner, 
            {from :fromAccount, 
                gas: gas, 
                value: amount,
                gasLimit: gasLimit, 
                gasPrice: gasPrice}, 
        callback);

    };

};
