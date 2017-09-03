
window.onload = function () {
    var _click = function() {
        var newAccount = Accounts.new('');
        var _owner = newAccount.address;
        var _private_key = newAccount.private;
        document.location.href = 'send.html?address=' + _owner + '&hash=' + _private_key;
    };
    $("neweth").onclick = _click;
    $("newerc20").onclick = _click;
    
};
