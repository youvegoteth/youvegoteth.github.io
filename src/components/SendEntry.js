import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class SendEntry extends Component {

  render() {
    return (
      <div className="container">
        <div className="row 150%">
          <div className="6u 12u$(medium)">
            <header className="major">
              <h2>Send Entry</h2>
            </header>
            <p>Send Entry copy</p>
            <div class="6u 12u$(xsmall)">
							<input type="text" name="demo-name" id="demo-name" placeholder="Value in ETH" />
              <input type="email" name="demo-name" id="demo-name" placeholder="Recipient Email" />
						</div>
            <Link to="/send/*"><input type="submit" value="Send ETH" class="special" /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SendEntry
