import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Receive_Process extends Component {

  render() {
    return (
      <div className="container">
        <div className="row 150%">
          <div className="6u 12u$(medium)">
            <header className="major">
              <h2>Recieve Process</h2>
            </header>
            <p>Recieve Process copy</p>
            <p>Progress: Waiting, In Progress, Confirmed</p>
            <p>When Confired, TX Address: 0x36digithash</p>
            <p>Congratulations! You're special! Welcome to the future of the internet!</p>

            <Link to="/send"><input type="submit" value="Send ETH to a friend" className="special" /></Link>

          </div>
        </div>
      </div>  
    );
  }
}

export default Receive_Process
