import React, { Component } from 'react'
import Why from './Why';
import FAQ from './FAQ';
import Education from './Education';
import Contact from './Contact';
import About from './About';

class Other extends Component {

  render() {
    return (
      <section id="two" className="main style1">
        <Education/>
        <Why/>
        <FAQ/>
        <About/>
        <Contact/>
      </section>
    );
  }
}

export default Other
