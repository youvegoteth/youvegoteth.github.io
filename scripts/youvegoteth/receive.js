
window.onload = function () {

        setTimeout(function(){
            $("loading").style.display = "none";
            if(!web3.currentProvider.isMetaMask){
                $("step_zero").style.display = "block";
            } else {
                $("send_eth").style.display = "block";
            }
        },1000);


        if(!getParam('address') || !getParam('key')){
            $("send_eth").innerHTML = "<h1>Error 🤖</h1> Invalid Link.  Please check your link and try again" ;
            return;
        }

    //default form values
    $("idx_address").value = getParam('address');
    $("private_key").value = getParam('key');
    $("amount_txt").innerHTML = getParam('amount');

    // When 'Generate Account' is clicked
    $("receive").onclick = function() {
        //get form data
        var private_key = $("private_key").value;
        var _idx = $("idx_address").value;
        var forwarding_address = $("forwarding_address").value.trim();

        if(!forwarding_address || forwarding_address == '0x0'){
            alert("Not a valid forwarding address.");
            return;
        }

        if(!_idx || _idx == '0x0'){
            alert("Invalid Link.  Please check your link and try again");
            return;
        }
        if(!private_key){
            alert("Invalid Link.  Please check your link and try again");
            return;
        }

        //set up callback to sendRawTransaction
        var callback = function(error, result){
            if(error){
                console.log(error);
                alert('got an error :(');
            } else {
                startConfetti();
                $("send_eth").innerHTML = "<h1>Success 🚀!</h1> <a href='https://etherscan.io/tx/"+result+"'>See your transaction on the blockchain here</a>.<br><br>(it might take a few minutes to show up, depending upon network congestion)" ;
            }
        };

        //find the nonce
        web3.eth.getTransactionCount(_idx,function(error,result){
            var nonce = result;
            contract().claimTransfer.estimateGas(_idx, forwarding_address,function(error,result1){

                //setup raw transaction
                if(!nonce){
                    nonce = 0;
                }
                var data = contract().claimTransfer.getData(_idx, forwarding_address);
                var payloadData = data; //??
                var fromAccount = _idx; //???
                var gas = 2.5 * 1000 * 100 ;
                if(gas > maxGas){
                    gas = maxGas;
                }
                var gasLimit = gas;
                var rawTx = {
                    nonce: web3.toHex(nonce),
                    gasPrice: web3.toHex(1),
                    gasLimit: web3.toHex(gasLimit),
                    gas: web3.toHex(gas),
                    to: contract_address,
                    from: fromAccount,
                    value: '0x00',
                    data: payloadData,
                };
                
                //sign & serialize raw transaction
                var tx = new EthJS.Tx(rawTx);
                tx.sign(new EthJS.Buffer.Buffer.from(private_key, 'hex'));
                var serializedTx = tx.serialize();

                //send raw transaction
                web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), callback);

            });
        });
    };
};
