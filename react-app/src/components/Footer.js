import React from 'react';
import linkedin from '../assets/img/linkedin-icon.svg';
import telegram from '../assets/img/telegram-icon.svg';
import instagram from '../assets/img/instagram-icon.svg';

export const Footer = () => {
	
  return (
    <footer className="bg-black text-white py-4 text-sm text-center">
      <p className="text-slate-400">&copy; 2024 Choi Juhwan. All rights reserved.</p>
      <div className="navbar-text mt-2">
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/juhwan-choi-861970219/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn icon" className="inline-block w-5 h-5 mx-2" />
          </a>
          <a
            href="https://telegram.me/choi88888"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="Telegram icon" className="inline-block w-5 h-5 mx-2" />
          </a>
          <a
            href="https://www.instagram.com/ch_0i_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram icon" className="inline-block w-5 h-5 mx-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};