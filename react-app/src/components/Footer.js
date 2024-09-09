import React from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
	
  return (
    <footer className="bg-gray-800 text-white py-4 text-sm text-center">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <div className="navbar-text mt-2">
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/juhwan-choi-861970219/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={navIcon1} alt="LinkedIn icon" className="inline-block mx-2" />
          </a>
          <a
            href="https://telegram.me/choi88888"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={''} alt="Telegram icon" className="inline-block mx-2" />
          </a>
          <a
            href="https://www.instagram.com/ch_0i_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={navIcon3} alt="Instagram icon" className="inline-block mx-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};