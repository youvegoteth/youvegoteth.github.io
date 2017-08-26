var weiPerEther = 1000000000000000000;

// Make alias of docuemtn.getElementById -> $
function makeAlias(object, name) {
    var fn = object ? object[name] : null;
    if (typeof fn == 'undefined') return function () {}
    return function () {
        return fn.apply(object, arguments)
    }
}

// Make docuemtn.getElementById aliased by $
$ = makeAlias(document, 'getElementById');

// Create Accounts Object
var Accounts = new Accounts();

// Set web3 provider
var provider = new HookedWeb3Provider({
  host: "http://localhost:8545",
  transaction_signer: Accounts
});
web3.setProvider(provider);

// Extend the web3 object
Accounts.log = function(msg){console.log(msg);};

window.onload = function () {

    // When 'Generate Account' is clicked
    $("new").onclick = function() {
        var passphrase = 'youvegoteth';
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
        var gasPrice = 1000000000;
        var gas = 100000 * 2;
        var gasLimit = gas * 2;
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