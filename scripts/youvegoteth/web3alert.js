
var _alert = function(msg){
    var existing_alerts = document.getElementsByClassName('alert_msg');
    for(var i=0;i<existing_alerts.length; i++){
        var top = parseInt(existing_alerts[i].style.top.replace('px',''));
        if(isNaN(top)){
            top = 0;
        }
        existing_alerts[i].style.top = top + 25 + "px";
    }

    var para = document.createElement("p");
    para.className="alert_msg";
    var element = document.body;
    element.appendChild(para);
    para.innerHTML = msg;
    var callback = function(){
        para.parentNode.removeChild(para);
    };
    setTimeout(callback,5000);
};

setTimeout(function(){
    if(!web3.currentProvider.isMetaMask){
        _alert("You must install <a href=https://metamask.io/>Metamask</a> to use this tool.");
    }
},1000);