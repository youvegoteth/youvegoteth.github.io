import React, { Component } from 'react'
import ReceiveEntry from './ReceiveEntry';
import ReceiveProcess from './ReceiveProcess';

import '../css/main.css'

class Recieve extends Component {

  render() {
    return (
      <section id="one" className="main style1">
        <ReceiveEntry/>
        <ReceiveProcess/>
      </section>
    );
  }
}

export default Recieve
