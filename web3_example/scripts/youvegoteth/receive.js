
window.onload = function () {

    //default form values
    $("idx_address").value = getParam('address');
    $("private_key").value = getParam('key');

    // When 'Generate Account' is clicked
    $("receive").onclick = function() {
        //get form data
        var private_key = $("private_key").value;
        var _idx = $("idx_address").value;
        var forwarding_address = $("forwarding_address").value;

        //set up callback to sendRawTransaction
        var callback = function(error, result){
            if(error){
                console.log(error);
                alert('got an error :(');
            } else {
                $("send_eth").innerHTML = "success ! " + result;
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
                var gas = result1;
                if(gas > maxGas){
                    gas = maxGas;
                }
                var gasLimit = gas;
                var rawTx = {
                    nonce: web3.toHex(nonce),
                    gasPrice: web3.toHex(gasPrice),
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
