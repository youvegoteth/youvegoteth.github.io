var TransferIndex = artifacts.require("./TransferIndex.sol");

contract("TransferIndex", function(accounts) {

    const weiPerEther = 1000000000000000000;
    const gasPrice = 100000000000;
    const gas = 250000;
    const send_gas_amount = 3000;

    it("Transfer is sent and could be claimed (no dev tip)", async function() {

        // setup
        var toAddressStartBalance = await web3.eth.getBalance(accounts[2]).toNumber();
        var EphemeralAddressStartBalance = await web3.eth.getBalance(accounts[1]).toNumber();

        //config
        var ti = await TransferIndex.new({from: accounts[0]});
        var amountInWei = 10 * weiPerEther; // 10 eth
        await ti.newTransfer.sendTransaction(true, accounts[1], {from: accounts[0], to: ti.address, value: amountInWei, gas:gas, gasPrice: gasPrice})


        //make sure the contract has the right balance
        var contractBalance = await web3.eth.getBalance(ti.address).toNumber();
        assert.strictEqual(contractBalance, amountInWei - send_gas_amount);

        var transferDetails = await ti.getTransferDetails.call(accounts[1]);
        //console.log(transferDetails);

        //claim the funds
        await ti.claimTransfer(accounts[1], accounts[2], {from: accounts[1], to: ti.address, gas:gas, gasPrice: gasPrice})
        
        //test for contract balance and to balance
        var contractBalance = await web3.eth.getBalance(ti.address).toNumber();
        assert.strictEqual(contractBalance, 0);

        //ephemeral account balance
        //var EphemeralAddressBalanceNow = await web3.eth.getBalance(accounts[1]).toNumber();
        //assert.strictEqual(EphemeralAddressBalanceNow - EphemeralAddressStartBalance, send_gas_amount);

        // to address
        var toAddressBalanceNow = await web3.eth.getBalance(accounts[2]).toNumber();
        assert.strictEqual(toAddressBalanceNow - toAddressStartBalance, amountInWei);


    });


});
