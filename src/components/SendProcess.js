import React, { Component } from 'react'

class SendProcess extends Component {
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
        <p>Send_Process</p>
      </div>
    );
  }
}

export default SendProcess
