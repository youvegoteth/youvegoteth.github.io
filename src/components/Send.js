import React, { Component } from 'react'

import SendEntry from './SendEntry';
import SendProcess from './SendProcess';

class Send extends Component {

  render() {
    return (
      <section id="one" className="main style1">
        <SendEntry />
        <SendProcess />
      </section>
    );
  }
}

export default Send
