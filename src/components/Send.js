import React, { Component } from 'react'

import SendEntry from './SendEntry';
import SendProcess from './SendProcess';

class Send extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  componentWillMount() {

  }


  render() {
    return (
      <div className="App">
        <p>Send Parent</p>
        <SendEntry />
        <SendProcess />
      </div>
    );
  }
}

export default Send
