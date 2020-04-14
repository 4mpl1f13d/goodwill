import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        {/* Copyright */}
        <ul className="copyright">
          <li>© Untitled. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
