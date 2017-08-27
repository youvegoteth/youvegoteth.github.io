import React, {Component} from 'react';
import '../css/header.css';

class Header extends Component {

  render() {
    return (
      <div className="App-header">
        <div className="Header-width">
          <div className="Header-left">
            <h2 className="Header-title">You've Got Eth</h2>
          </div>
          <div className="Header-Right">
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
