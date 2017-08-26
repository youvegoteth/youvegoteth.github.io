import React, { Component } from 'react'
import Why from './Why';
import FAQ from './FAQ';
import Education from './Education';
import Contact from './Contact';
import About from './About';

class Other extends Component {

  render() {
    return (
      <div>
        <Education/>
        <Why/>
        <About/>
        <FAQ/>
        <Contact/>
      </div>
    );
  }
}

export default Other
