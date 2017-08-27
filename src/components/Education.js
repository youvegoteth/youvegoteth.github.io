import React, { Component } from 'react'

import '../css/education.css'

class Education extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="title">
            <div className="major">
              <div className="mini-major">
                <h2 className="h2-underline">Education</h2>
              </div>
              <h3>Using "You've Got ETH" is simple</h3>
              <p>To get started all you need to do is put in your friends <b>email address</b> as well as the amount of <a href="https://www.ethereum.org/">Ethereum</a> you want to send.</p>
              <p>(Then if you're so enclined leave us a tip, that's how we survive!)</p>
              <p>An email will be sent to the address you specified, with easy instructions for them to setup a <a href="https://metamask.io/">MetaMask</a> account and get started with Ethereum.</p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Education
