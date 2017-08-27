function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

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
        var accept_tos = $("tos").checked;
        console.log(accept_tos);
        //validation
        if(!validateEmail(email)){
            alert('You must enter an email!');
            return;
        }
        if(!isNumeric(amount)){
            alert('You must an number for the amount!');
            return;
        }
        if(!accept_tos){
            alert('You must accept the terms.');
            return;
        }

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
                $("trans_link").href = "https://etherscan.io/tx/" + result;
                var relative_link = "receive.html?key=" + _private_key + "&address=" + _owner + "&amount=" + $("amount").value;
                var link = document.location.href.split('?')[0].replace('send.html','') + relative_link;
                $('link').value = link;
                $("continue").href="mailto:"+email+"?subject=You've Got ETH!&body=I've just sent you Ethereum.  Click here to claim it: " + encodeURIComponent(link);
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
