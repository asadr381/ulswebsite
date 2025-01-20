import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 2px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Universal Logistics Services. All Rights Reserved.</p>
      <p>CONTACT US: phone: '+92-21-35148129-31',
      una: 'UNA: +92-21-111-669-877' </p>
      <div>
        <a href="https://facebook.com" style={{ color: 'white', margin: '0 10px' }}>Facebook</a>
        <a href="https://twitter.com" style={{ color: 'white', margin: '0 10px' }}>Twitter</a>
      </div>
      <div>
        <Link to="/privacy-policy" style={{ color: 'white', margin: '0 10px' }}>Privacy Policy</Link> |
        <Link to="/terms-and-conditions" style={{ color: 'white', margin: '0 10px' }}>Terms and Conditions</Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
