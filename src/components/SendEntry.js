import React, { Component } from 'react'

class SendEntry extends Component {
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
        <p>Send_Entry</p>
      </div>
    );
  }
}

export default SendEntry
