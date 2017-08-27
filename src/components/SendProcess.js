import React, {Component} from 'react'
import getWeb3 from '../utils/getWeb3'
import TransferIndex from '../../build/contracts/TransferIndex.json'

class SendProcess extends Component {

  constructor(props) {
    super(props)

    this.state = {
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3.then(results => {
      this.setState({web3: results.web3})
      // Instantiate contract once web3 provided.
      // this.instantiateContract()
      this.instantiateContract()
    }).catch((e) => {
      console.log(e);
      console.log('Error finding web3.')
    })
  }

  // componentDidUpdate () {
  //   // console.log(this.state.web3)
  //   this.state.web3.eth.getAccounts((error, accounts) => {
  //     var fromAccount = accounts[0];
  //
  //   })
  // }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    // const contract = require('truffle-contract')
    // const simpleStorage = contract(SimpleStorageContract)
    // simpleStorage.setProvider(this.state.web3.currentProvider)
    //
    // // Declaring this for later so we can chain functions on SimpleStorage.
    // var simpleStorageInstance
    //
    // // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   simpleStorage.deployed().then((instance) => {
    //     simpleStorageInstance = instance
    //
    //     // Stores a given value, 5 by default.
    //     return simpleStorageInstance.set(5, {from: accounts[0]})
    //   }).then((result) => {
    //     // Get the value from the contract to prove it worked.
    //     return simpleStorageInstance.get.call(accounts[0])
    //   }).then((result) => {
    //     // Update state with the result.
    //     return this.setState({storageValue: result.c[0]})
    //   })
    // })

    // starting here
    const contract = require('truffle-contract')
    // testrpc address
    const transferIndex = contract(TransferIndex)

console.log('TransferIndex', TransferIndex);

    // var transferIndex = contract(TransferIndex)
    // transferIndex = this.state.web3.eth.contract(TransferIndex.abi).at('0xcfeb869f69431e42cdb54a4f4f105c19c080a601');

    transferIndex.setProvider(this.state.web3.currentProvider)

    var transferIndexInstance

    this.state.web3.eth.getAccounts((error, accounts) => {
      console.log('accounts', accounts);
      console.log('now', transferIndex);
      transferIndex.deployed().then((instance) => {
        transferIndexInstance = instance

        console.log(instance);


    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   var fromAccount = accounts[0];
    //   // transferIndex.deployed().then()
    //   console.log('fromAccount')
    //
    })
  })
}

  render() {
    // console.log(this.state.web3)
    return (

      <div className="row 150%">
        <div className="6u 12u$(medium)">
          <header className="major">
            <h2>Send Process</h2>
          </header>
          <p>Send copy</p>
          <p>You've sent ETH to "recipient email"</p>
          <p>Contract Address: 0x36digithash</p>
          <p>Progress: Waiting, In Progress, Confirmed</p>
          <p>When Confired, TX Address: 0x36digithash</p>

          <a href={"mailto:" + this.props.userEmail + "?subject=Hey Here's%20Some%20Ethereum&body=Hey,\nI'm sending you some Ethereum, to claim please follow this link http://www.geocities.com/wowhtml/"} className="button special">Notify Recipient</a>

        </div>
      </div>

    );
  }

}

export default SendProcess
