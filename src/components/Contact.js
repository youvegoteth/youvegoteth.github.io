import React, { Component } from 'react'

class Contact extends Component {

  render() {
    return (
      <div className="container">
        <div className="row 150%">
          <div className="6u 12u$(medium)">
            <header className="major">
              <h2>Get in touch with us!</h2>
            </header>
              <p>We love hearing from our fans, as well as people telling us how great we are.</p>
              <p>If you need to contact us, fill out the form below:</p>
              <div class="split style1">
                <section>
                  <form method="post" action="#">
                    <div class="field half first">
                      <label for="name">Name</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div class="field half">
                      <label for="email">Email</label>
                      <input type="text" name="email" id="email" />
                    </div>
                    <div class="field">
                      <label for="message">Message</label>
                      <textarea name="message" id="message" rows="5"></textarea>
                    </div>
                    <ul class="actions">
                      <li><a href="" class="button submit">Send Message</a></li>
                    </ul>
                  </form>
                </section>
                <section>
                  <ul class="contact">
                    <li>
                      <h3>Address</h3>
                      <span>1023 Walnut St.<br />
                      Boulder, CO 80302<br />
                      USA</span>
                    </li>
                    <li>
                      <h3>Email</h3>
                      <a href="mailto:support@youvegot.eth">support@youvegot.eth</a>
                    </li>
                    <li>
                      <h3>Phone</h3>
                      <span>(303)720-1730</span>
                    </li>
                    <li>
                      <h3>Social</h3>
                      <ul class="icons">
                        <li><a href="https://twitter.com/youvegoteth" class="fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="https://www.facebook.com/youvegoteth/" class="fa-facebook"><span class="label">Facebook</span></a></li>
                        <li><a href="https://github.com/youvegoteth/youvegoteth.github.io" class="fa-github"><span class="label">GitHub</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </section>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact
