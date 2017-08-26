import React, {Component} from 'react'
import {Link} from 'react-router-dom'


import '../css/main.css'

class ReceiveEntry extends Component {

  render() {
    return (
      <div className="container">
        <div className="row 150%">
          <div className="6u 12u$(medium)">
            <header className="major">
              <h2>Recieve Entry</h2>
            </header>
            <p>Recieve Entry copy</p>
            <img src="../../public/video-player.png" alt="video wireframe" />
            <input type="text" name="demo-name" id="demo-name" placeholder="Metamask Wallet Address" />
            <Link to="/receive/*"><input type="submit" value="Receive ETH" className="special" /></Link>

          </div>
        </div>
      </div>
    );
  }
}

export default ReceiveEntry
