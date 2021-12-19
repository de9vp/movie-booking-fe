import React from 'react';
import { FacebookOutlined, GoogleOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-top">
          <a href="/">
            <img src="data:image/png;base64,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" alt="logo" />
          </a>
          <ul className="social-icons ml-auto">
            <li><FacebookOutlined /></li>
            <li><TwitterOutlined /></li>
            <li><GoogleOutlined /></li>
            <li><InstagramOutlined /></li>
          </ul>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="left">Copyright © 2021.All Rights Reserved By Doges</div>
          <div className="links mb-0">
            <ul className="contact-link">
              <li>About</li>
              <li>Terms of Use</li>
              <li>Policy</li>
              <li>FAQ</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
