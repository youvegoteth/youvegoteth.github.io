
window.onload = function () {

    $("new").onclick = function() {
        var newAccount = Accounts.new(passphrase);
        var _owner = newAccount.address;
        var _private_key = newAccount.hash;
        document.location.href = 'send.html?address=' + _owner + '&hash=' + _private_key;
    };

};
