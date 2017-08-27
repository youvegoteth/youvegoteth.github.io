
window.onload = function () {

    $("new").onclick = function() {
        var newAccount = Accounts.new('');
        var _owner = newAccount.address;
        var _private_key = newAccount.private;
        document.location.href = 'send.html?address=' + _owner + '&hash=' + _private_key;
    };

};
