import React, { Component } from 'react'

class Why extends Component {
  render() {
    return (
      <div className="container">
        <div className="row 150%">
          <div class="6u 12u$(medium)">
            <ul class="major-icons">
              <li>
                <span class="icon style1 major fa-code"></span>
              </li>
              <li>
                <span class="icon style2 major fa-bolt"></span>
              </li>
              <li>
                <span class="icon style3 major fa-camera-retro"></span>
              </li>
              <li>
                <span class="icon style4 major fa-cog"></span>
              </li>
              <li>
                <span class="icon style5 major fa-desktop"></span>
              </li>
              <li>
                <span class="icon style6 major fa-calendar"></span>
              </li>
            </ul>
          </div>
          <div class="6u$ 12u$(medium)">
            <header class="major">
              <h2>Why Are We Doing This?</h2>
            </header>
            <p>The more people that use Ethereum the better, we're helping the less tech savvy get started with the blockchain.</p>
            <p>For someone new to cryptocurrencies, the getting started process can be intimidating! You have to download a wallet, setup a private key, and find a way to buy the currency!</p>
            <p>With "You've Got ETH" you can now send anyone with an email address some Ethereum... got bills to pay, send them Ethereum. Lost a bet... send them some Ethereum</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Why
