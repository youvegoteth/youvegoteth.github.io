import React, { Component } from 'react'
import Receive_Entry from './Receive_Entry';
import Receive_Process from './Receive_Process';

class Receive_Process extends Component {

  render() {
    return (
      <div>
        <Receive_Entry/>
        <Receive_Process/>
      </div>
    );
  }
}

export default Receive_Process
