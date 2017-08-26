import React, { Component } from 'react'

class FAQ extends Component {

  render() {
    return (
      <div className="container">
        <div className="row 150%">
          <div className="6u 12u$(medium)">
            <header className="major">
              <h2>FAQ</h2>
            </header>
            <h3>Can my grandmother use this?</h3>
            <p>Yes</p>
            <h3>Is this safe?</h3>
            <p>Yes</p>
            <h3>Can I send this to any email address?</h3>
            <p>Yes</p>
          </div>
          <div class="6u$ 12u$(medium) important(medium)">
            <span class="image fit"><img src="images/pic01.jpg" alt="" /></span>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ
