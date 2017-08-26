import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js';

import '../css/home.css'

class Home extends Component {

  render() {
    return (
      <div className="App-intro-bar">
          <Particles params={{
         particles: {
           number: {
             value: 50
           },
           line_linked: {
             shadow: {
               enable: false,
               color: "#3CA9D1",
               blur: 1
             }
           }
         }
       }} style={{
         position: "fixed",
         top: 0,
         left: 0,
         width: "100%",
         height: "100%"
       }}/>
      <div className="IntroBar-width">
        <h1 className="IntroBar-title">Evangelize ETH</h1>
          <h3 className="h3-thing">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </h3>
          <div className="IntroBar-benefits-div">
            <div className="IntroBar-benefits">
              <div className="circle"/>
              <span className="IntroBar-benefits-span">Friendly</span>
              <p>Send to friends who know little about Eth.</p>
            </div>
            <div className="IntroBar-benefits">
              <div className="circle"/>
              <span className="IntroBar-benefits-span">Fast</span>
              <p>Receive funds at the speed of SMTP.</p>
            </div>
            <div className="IntroBar-benefits">
              <div className="circle"/>
              <span className="IntroBar-benefits-span">Secure</span>
              <p>No need to worry about public and private keys.</p>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Home
