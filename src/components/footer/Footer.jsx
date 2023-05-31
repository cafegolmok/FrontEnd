// src/components/Footer/Footer.jsx

import React from 'react';
import { FooterContainer, Company, CompanyTitle, SnsList, SnsImg } from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <Company>
        <CompanyTitle>카페골목</CompanyTitle>
        <SnsList>
          <li>
            <a href="#" className="link-github">
              <SnsImg src="/assets/images/github.png" alt="GitHub 로고" />
            </a>
          </li>
          <li>
            <a href="#" className="link-instagram">
              <SnsImg src="/assets/images/instagram.png" alt="Instagram 로고" />
            </a>
          </li>
        </SnsList>
      </Company>
    </FooterContainer>
  );
};

export default Footer;
