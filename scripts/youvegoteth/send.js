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
        metaMaskWarning();
        //setup
        var fromAccount = web3.eth.accounts[0];

        //get form data
        var email = $("email").value;
        var amount = $("amount").value * weiPerEther;
        var amountInEth = amount * 1.0 / weiPerEther;
        var _disableDeveloperTip = !$("tip").checked;
        var accept_tos = $("tos").checked;

        //validation
        if(!validateEmail(email)){
            _alert('You must enter an email!');
            return;
        }
        if(!isNumeric(amount) || amount == 0){
            _alert('You must enter an number for the amount!');
            return;
        }
        var min_amount = 6000000*1.0/weiPerEther;
        var max_amount = 5;
        if(amountInEth > max_amount){
            _alert('You can only send a maximum of' + max_amount + ' ETH.');
            return;
        }
        if(amountInEth < min_amount){
            _alert('You can minimum of' + min_amount + ' ETH.');
            return;
        }

        if(!accept_tos){
            _alert('You must accept the terms.');
            return;
        }

        //generate ephemeral account
        var _owner = $("idx_address").value;
        var _private_key = $("hash").value;

        //set up callback for web3 call to newTransfer
        var callback = function(error, result){
            if(error){
                console.log(error);
                _alert('got an error :(');
            } else {
                $("send_eth").style.display = 'none';
                $("send_eth_done").style.display = 'block';
                $("trans_link").href = "https://"+etherscanDomain+"/tx/" + result;
                var relative_link = "receive.html?key=" + _private_key + "&address=" + _owner + "&amount=" + $("amount").value + "&network=" + network_id;
                var link = document.location.href.split('?')[0].replace('send.html','') + relative_link;
                $('link').value = link;
                var warning = "";
                if(network_id == 3){
                    warning = "(Ropsten)";
                } else if(network_id == 9){
                    warning = "(TestRPC)";
                }
                $("continue").href="mailto:"+email+"?subject=You've Got "+warning+" ETH!&body=I've just sent you Ethereum.  Click here to claim it: " + encodeURIComponent(link);
                var qrcode = new QRCode("qrcode");
                qrcode.makeCode(link);
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
