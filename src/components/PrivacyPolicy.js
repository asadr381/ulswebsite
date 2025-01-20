import React from 'react';
import styled from 'styled-components';

const PolicyContainer = styled.section`
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
`;

const Content = styled.div`
  margin-top: 20px;
  line-height: 1.6;
  font-size: 16px;
`;

const PrivacyPolicy = () => {
  return (
    <PolicyContainer>
      <Title>Privacy Policy</Title>
      <Content>
        <h3>Introduction</h3>
        <p>At Universal Logistics Services (ULS), we value your privacy. This policy explains how we collect, use, and protect your information.</p>

        <h3>Information Collection</h3>
        <p>We collect personal information such as name, email, and phone number when you contact us or use our services.</p>

        <h3>Data Usage</h3>
        <p>Your personal information is used only for providing services, communication, and enhancing user experience.</p>

        <h3>Data Protection</h3>
        <p>We implement security measures to safeguard your information against unauthorized access or misuse.</p>

        <h3>Cookies</h3>
        <p>Our website uses cookies to enhance user experience and gather analytics data.</p>

        <h3>Contact Us</h3>
        <p>If you have any questions regarding this Privacy Policy, please contact us at [email address].</p>
      </Content>
    </PolicyContainer>
  );
};

export default PrivacyPolicy;
