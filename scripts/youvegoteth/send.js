function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

window.onload = function () {
    var min_send_amt_wei = 6000000;
// address is owner, hash is private key
    $("idx_address").value = getParam('address');
    $("hash").value = getParam('hash');

    tokens.forEach(function(ele){
        var option = document.createElement("option");
        option.text = ele.name;
        option.value = ele.addr;
        $("token").add(option);
    });

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
        var token = $("token").value;
        var fees = parseInt($("fees").value);
        var isSendingETH = (token == '0x0' || token == '0x0000000000000000000000000000000000000000');
        var tokenDetails = tokenAddressToDetails(token);
        var tokenName = 'ETH';
        if(!isSendingETH){
            tokenName = tokenDetails.name;
        }

        //validation
        if(!validateEmail(email)){
            _alert('You must enter an email!');
            return;
        }
        if(!isNumeric(amount) || amount == 0){
            _alert('You must enter an number for the amount!');
            return;
        }
        var min_amount = min_send_amt_wei*1.0/weiPerEther;
        var max_amount = 5;
        if(!isSendingETH){
            max_amount = 1000;
        }
        if(amountInEth > max_amount){
            _alert('You can only send a maximum of ' + max_amount + ' '+tokenName+'.');
            return;
        }
        if(amountInEth < min_amount){
            _alert('You can minimum of' + min_amount + ' '+tokenName+'.');
            return;
        }

        if(!accept_tos){
            _alert('You must accept the terms.');
            return;
        }

        //generate ephemeral account
        var _owner = $("idx_address").value;
        var _private_key = $("hash").value;

        //set up callback for web3 call to final transfer
        var final_callback = function(error, result){
            if(error){
                console.log(error);
                _alert('got an error :(');
            } else {
                $("send_eth").style.display = 'none';
                $("tokenName").innerHTML = tokenName;
                $("send_eth_done").style.display = 'block';
                $("trans_link").href = "https://"+etherscanDomain+"/tx/" + result;
                var relative_link = "receive.html?key=" + _private_key + "&address=" + _owner + "&amount=" + $("amount").value + "&network=" + network_id+ "&token=" + tokenName;
                var link = document.location.href.split('?')[0].replace('send.html','') + relative_link;
                $('link').value = link;
                var warning = "";
                if(network_id == 3){
                    warning = "(Ropsten)";
                } else if(network_id == 9){
                    warning = "(TestRPC)";
                }
                $("continue").href="mailto:"+email+"?subject=You've Got "+warning+" "+tokenName+"!&body=I've just sent you "+tokenName+".  Click here to claim it: " + encodeURIComponent(link);
                var qrcode = new QRCode("qrcode");
                qrcode.makeCode(link);
            }
        };

        //set up callback for web3 call to erc20 callback
        var erc20_callback = function(error, result){
            if(error){
                console.log(error);
                alert('got an error :(');
            } else {
                token_contract(token).approve.estimateGas(contract_address, amount, function(error, result){
                    var _gas = result;
                    if (_gas > maxGas){
                        _gas = maxGas;
                    }
                    var _gasLimit = _gas * 1.01;
                    token_contract(token).approve.sendTransaction(
                        contract_address, 
                        amount, 
                        {from :fromAccount, gas:gas, gasLimit: gasLimit},
                        final_callback);
                });
            }
        };


        //send transfer to web3
        var next_callback = null;
        var amountETHToSend = null;
        if(isSendingETH){
            next_callback = final_callback;
            amountETHToSend = amount + fees;
        } else {
            next_callback = erc20_callback;
            amountETHToSend = min_send_amt_wei + fees;
        }
        contract().newTransfer.estimateGas(_disableDeveloperTip, _owner, token, amount, fees, function(error, result){
            var _gas = result;
            if (_gas > maxGas){
                _gas = maxGas;
            }
            var _gasLimit = _gas * 1.01;
            contract().newTransfer.sendTransaction(
                _disableDeveloperTip,
                _owner,
                token,
                amount,
                fees,
                {from :fromAccount,
                    gas: _gas,
                    value: amountETHToSend,
                    gasLimit: _gasLimit},
            next_callback);
        });
    };

};
