import React, { Component } from 'react'

class SendProcess extends Component {

  render() {
    console.log(this.props);
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

            <a href={"mailto:" + this.props.userEmail} className="button special">Notify Recipient</a>

          </div>
        </div>

    );
  }

}

export default SendProcess
