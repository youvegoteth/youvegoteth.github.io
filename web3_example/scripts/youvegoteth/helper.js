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

console.log(Accounts.length);

window.onload = function () {

    

    // When 'Generate Account' is clicked
    $("new").onclick = function() {
        var passphrase = 'youvegoteth';
        var newAccount = Accounts.new(passphrase);
        console.log(newAccount);
    };

};