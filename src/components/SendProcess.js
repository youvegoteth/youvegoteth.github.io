import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SendProcess extends Component {

  render() {
    return (
      <div className="container">
        <div className="row 150%">
          <div className="6u 12u$(medium)">
            <header className="major">
              <h2>Send Process</h2>
            </header>
            <p>Send copy</p>
            <p>You've sent ETH to " recipient email"</p>
            <p>Contract Address: 0x36digithash</p>
            <p>Progress: Waiting, In Progress, Confirmed</p>
            <p>When Confired, TX Address: 0x36digithash</p>

            <a href="mailto:kevin@me.com" className="button special">Notify Recipient</a>

            <Link to="/send"><input type="submit" value="Send ETH to another email" className="special" /></Link>

          </div>
        </div>
      </div>
    );
  }

}

export default SendProcess
