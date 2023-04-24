import './Footer.scss';
import React from 'react';

const Footer = () => {
  return (
    <footer className="company-container">
      <section className="company">
        <strong className="title-company">카페골목</strong>
        <ul className="link-sns">
          <li>
            <a href="#" className="link-github">
              <img src="assets/images/github.png" alt="GitHub 로고" />
            </a>
          </li>
          <li>
            <a href="#" className="link-instagram">
              <img src="assets/images/instagram.png" alt="Instagram 로고" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
