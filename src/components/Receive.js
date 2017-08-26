import React, { Component } from 'react'
import ReceiveEntry from './ReceiveEntry';
import ReceiveProcess from './ReceiveProcess';

class Recieve extends Component {

  render() {
    return (
      <div>
        <p>Receive Parent</p>
        <ReceiveEntry/>
        <ReceiveProcess/>
      </div>
    );
  }
}

export default Recieve
