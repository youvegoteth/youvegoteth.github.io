import React, { Component } from 'react'

class Education extends Component {
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
        <p>Education</p>
      </div>
    );
  }
}

export default Education
