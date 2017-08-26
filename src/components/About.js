import React, { Component } from 'react'

class About extends Component {
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
        <p>About</p>
      </div>
    );
  }
}

export default About
