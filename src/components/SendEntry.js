import React, { Component } from 'react'
import SendProcess from './SendProcess'
var Accounts = require('ethereumjs-accounts');
var accounts = new Accounts({minPassphraseLength: 0});

class SendEntry extends Component {

  constructor(props) {
  super(props);
  this.state = {
    show: "entry",
    userEmail: "",
    txHash: "",
    privKey: "",
    num_eth: ""
  };
}

  componentDidMount () {
    var newAccount = accounts.new('');
    //TODO: import scripts
    // need to pass Accounts
    var _owner = newAccount.address;
    var _private_key = newAccount.private;
    this.setState({
      newAccount: newAccount,
      _owner: _owner,
      _private_key: _private_key
    })
    // document.location.href = 'send.html?address=' + _owner + '&hash=' + _private_key;
  }

  activateLasers = () => {
    this.setState({
      show: "process"
    })
  }

  deactivateLasers = () => {
    this.setState({
      show: "entry"
    })
  }


  getChainData = () => {
    this.setState({
      txHash: "pseudo for KOs data",
      privKey: "pseudo for KOs data",
      num_eth: "pseudo for KOs data"
    });
  }


  handleChange = (event) => {
   this.setState({userEmail: event.target.value});
 }


  render() {
    if (this.state.show === "entry") {
      return (
        <div className="container">
          <div className="row 150%">
            <div className="6u 12u$(medium)">
              <header className="major">
                <h2>Send Entry</h2>
              </header>
              <p>Send copy</p>
              <div className="6u 12u$(xsmall)">
  							<input type="text" name="demo-name" id="demo-name" placeholder="Value in ETH" />
                <input onChange={this.handleChange} type="email" name="demo-name" id="demo-name" placeholder="Recipient Email" />
  						</div>
              <p>Support You've Got Eth with a tip</p>
              <div className="select-wrapper">
										<select name="demo-category" id="demo-category">
											<option value="0">- 0% -</option>
											<option value="10">10%</option>
											<option value="15">15%</option>
											<option value="20">20%</option>
											<option value="25">25%</option>
										</select>
									</div>
              <input onClick={this.activateLasers} type="submit" value="Send ETH" className="special" />

            </div>
          </div>
        </div>
      );

    } else {
      return (
      <div className="container">
        <SendProcess userEmail={this.state.userEmail} txHash={this.state.txHash} privKey={this.state.privKey} num_eth={this.state.num_eth} />
        <input onClick={this.deactivateLasers} type="submit" value="Send ETH to another email" className="special" />
      </div>
      )
    }

  }
}

export default SendEntry
