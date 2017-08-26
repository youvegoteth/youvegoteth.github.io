import React, { Component } from 'react'

class Why extends Component {
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
        <p>Why</p>
      </div>
    );
  }
}

export default Why
