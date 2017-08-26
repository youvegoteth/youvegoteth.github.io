var weiPerEther = 1000000000000000000;

// Make alias of docuemtn.getElementById -> $
function makeAlias(object, name) {
    var fn = object ? object[name] : null;
    if (typeof fn == 'undefined') return function () {}
    return function () {
        return fn.apply(object, arguments)
    }
}

var passphrase = 'youvegoteth';
var gasPrice = 1000000000 * 2;
var gas = 100000 * 2;
var gasLimit = gas * 2;
var maxGas = 4476768;

// Make docuemtn.getElementById aliased by $
$ = makeAlias(document, 'getElementById');

// Create Accounts Object
if(Accounts){
  var Accounts = new Accounts();

  // Set web3 provider
  var provider = new HookedWeb3Provider({
//    host: "http://localhost:8545",
    host: 'https://ropsten.infura.io/',
    transaction_signer: Accounts
  });
  web3.setProvider(provider);

  // Extend the web3 object
  Accounts.log = function(msg){console.log(msg);};

}


function getParam(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
