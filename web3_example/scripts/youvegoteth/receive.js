
window.onload = function () {
    console.log(web3.version);
    console.log(contract().claimTransfer.getData);
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
                console.log(result);
            }
        };

        //find the nonce
        web3.eth.getTransactionCount(_idx,function(error,result){

            //setup raw transaction
            var nonce = result;
            var data = contract().claimTransfer.getData(_idx, forwarding_address);
            var payloadData = data; //??
            var fromAccount = _idx; //???
            console.log('fromAccount', fromAccount);
            var rawTx = {
                nonce: web3.toHex(nonce),
                gasPrice: web3.toHex(gasPrice),
                gasLimit: web3.toHex(gasLimit),
                to: contract_address,
                from: fromAccount,
                value: '0x00',
                data: payloadData
            };

            //sign & serialize raw transaction
            var tx = new EthJS.Tx(rawTx);
            tx.sign(new EthJS.Buffer.Buffer(private_key, 'hex'));
            var serializedTx = tx.serialize();

            //send raw transaction
            web3.eth.sendRawTransaction(serializedTx.toString('hex'),callback);

        });
    };
};
