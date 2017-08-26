import React, { Component } from 'react'

class Contact extends Component {
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
        <p>Contact</p>
      </div>
    );
  }
}

export default Contact
