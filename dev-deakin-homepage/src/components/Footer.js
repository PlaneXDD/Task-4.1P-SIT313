// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div style={{ background: '#008080', color: 'white', padding: '20px', textAlign: 'center' }}>
      <div>
        <h4>Explore</h4>
        <p>Home | Questions | Articles | Tutorials</p>
      </div>
      <div>
        <h4>Support</h4>
        <p>FAQs | Help | Contact Us</p>
      </div>
      <div>
        <h4>Stay Connected</h4>
        <p>Facebook | Twitter | Instagram</p>
      </div>
      <div>
        <p>DEV@Deakin {currentYear}</p>
        <p>Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </div>
  );
};

export default Footer;
