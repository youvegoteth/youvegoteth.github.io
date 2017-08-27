import React, { Component } from 'react'
import getWeb3 from '../utils/getWeb3'

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

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      // this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  componentDidUpdate () {
    // console.log(this.state.web3)
    this.state.web3.eth.getAccounts((error, accounts) => {
      var fromAccount = accounts[0];

    })
  }

  render () {
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
