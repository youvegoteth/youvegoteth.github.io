import React, { Component } from 'react'

class FAQ extends Component {
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
        <p>FAQ</p>
      </div>
    );
  }
}

export default FAQ
