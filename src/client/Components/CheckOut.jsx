import React, { Component } from "react";

export class CheckOut extends Component {
  render() {
    return (
      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Check Out</h2>
          </header>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <input type="submit" defaultValue="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default CheckOut;
