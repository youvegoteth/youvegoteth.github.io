import React, {Component} from 'react'
import {Link} from 'react-router-dom'

// import '../../web3_example/scripts/youvegoteth'

import ReceiveProcess from './ReceiveProcess'

import '../css/main.css'

class ReceiveEntry extends Component {

  constructor(props) {
  super(props);
  this.state = {
    show: "entry"
  };
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

  render() {
    if (this.state.show === "entry") {
      return (
        <div className="container">
          <div className="row 150%">
            <div className="6u 12u$(medium)">
              <header className="major">
                <h2>Recieve Entry</h2>
              </header>
              <p>Recieve Entry copy</p>
              <img src="https://youtu.be/6Gf_kRE4MJU" alt="MetaMask Video" />
              <input type="text" name="demo-name" id="demo-name" placeholder="Metamask Wallet Address" />
              <input onClick={this.activateLasers} type="submit" value="Receive ETH" className="special" />

            </div>
          </div>
        </div>
      );

    } else {
      return (
      <div className="container">
        <ReceiveProcess userEmail={this.state.userEmail}/>
        <Link to="/send"><input type="submit" value="Send ETH to a friend" className="special" /></Link>
      </div>
      )
    }

  }
}

export default ReceiveEntry
