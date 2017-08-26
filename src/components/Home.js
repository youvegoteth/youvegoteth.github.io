import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/main.css'

class Home extends Component {

  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-cloud"></span>
          <h1>You've Got Eth</h1>
          <p>Send Ethereum to anyone in your email</p>
          <ul className="actions">
            <li>
              <Link to='/send' href="#one" className="button scrolly">Send</Link>
              <Link to='/receive' href="#one" className="button scrolly">Receive</Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Home
