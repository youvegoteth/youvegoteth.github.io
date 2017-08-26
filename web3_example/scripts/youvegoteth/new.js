
window.onload = function () {

    // When 'Generate Account' is clicked
    $("new").onclick = function() {
        var email = $("email").value;
        var amount = $("amount").value * weiPerEther;
        var newAccount = Accounts.new(passphrase);
        var _disableDeveloperTip = !$("tip").checked; 
        var _owner = newAccount.address;
        var callback = function(error, result){
            if(error){
                alert('got an error :(');
            } else {
                console.log(result);
                $("send_eth").style.display = 'none';
                $("send_eth_done").style.display = 'block';
                $("trans_id").innerHTML = result;
                $("priv_key").innerHTML = newAccount.private;
            }
        };
        var fromAccount = web3.eth.accounts[0];
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
