
window.onload = function () {

    // When 'Generate Account' is clicked
    $("receive").onclick = function() {
        var private_key = $("private_key").value;
        var forwarding_address = $("forwarding_address").value;
        var newAccount = Accounts.new(passphrase); //TODO:load this from the priv key
        var callback = function(error, result){
            if(error){
                alert('got an error :(');
            } else {
                console.log(result);
            }
        };
        var fromAccount = web3.eth.accounts[0];
        contract.claimTransfer.sendTransaction(
            _idx,
            forwarding_address, 
            {from :fromAccount, 
                gas: gas, 
                gasLimit: gasLimit, 
                gasPrice: gasPrice}, 
        callback);

    };

};
