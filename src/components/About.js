import React, { Component } from 'react'

class About extends Component {

  render() {
    return (
      <div className="container">
          <header class="major">
            <h2>About Us</h2>
          </header>
          <p>We're a team of visionaries who are out to spread <a href="https://www.ethereum.org/">Ethereum</a> to the world</p>
          <div class="row 150%">
            <div class="4u 12u$(medium)">
              <h3>Brent Kirkland</h3>
              <span class="image fit"><img src="https://lh3.google.com/u/0/d/0B-nnoQerSxaQOFA0dFZRczV4Ulk=w2880-h1464-iv1" alt="Brent Kirkland" /></span>
              <p>Recent Graduate, Blockchain Enthusiast</p>
              <ul class="actions">
                <li><a href="https://github.com/brentkirkland" class="button">Learn More</a></li>
              </ul>
            </div>
            <div class="4u 12u$(medium)">
              <h3>Kevin Owocki</h3>
              <span class="image fit"><img src="https://lh3.google.com/u/0/d/0B-nnoQerSxaQTHdNUjkzdHdvTlU=w2880-h1464-iv1" alt="Kevin Owocki" /></span>
              <p>Strange Name, Strong Game</p>
              <ul class="actions">
                <li><a href="https://github.com/owocki" class="button">More</a></li>
              </ul>
            </div>
            <div class="4u$ 12u$(medium)">
              <h3>Kevin Seagraves</h3>
              <span class="image fit">
                <img src={"https://lh3.google.com/u/0/d/0B-nnoQerSxaQLTIwdnNiZldDSG8=w2880-h1464-iv1"} alt="Kevin Seagraves" />
              </span>
              <p>The man, the myth, the legend</p>
              <ul class="actions">
                <li><a href="https://github.com/captnseagraves" class="button">More</a></li>
              </ul>
            </div>
            <div class="4u$ 12u$(medium)">
              <h3>Paul "Crypto" Foley</h3>
              <span class="image fit">
                <img src={"https://lh3.google.com/u/0/d/0B-nnoQerSxaQLUJpakhRT1FiMXM=w2880-h1552-iv1"} alt="Paul Foley" />
              </span>
              <p>Blockchain Evangelist</p>
              <ul class="actions">
                <li><a href="https://github.com/paulfoley" class="button">More</a></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default About
