import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.section`
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

const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <Title>Terms and Conditions</Title>
      <Content>
        <h3>Introduction</h3>
        <p>Welcome to Universal Logistics Services (ULS). By using our website and services, you agree to comply with and be bound by these terms and conditions.</p>

        <h3>Services</h3>
        <p>ULS provides global logistics services, including air, sea, and land transportation solutions.</p>

        <h3>Use of Services</h3>
        <p>You agree to use our services for lawful purposes only and not to engage in any activities that could harm or disrupt our services.</p>

        <h3>Account Responsibility</h3>
        <p>If you create an account with ULS, you are responsible for maintaining the confidentiality of your login credentials and for any activity under your account.</p>

        <h3>Limitation of Liability</h3>
        <p>ULS is not liable for any direct or indirect damages arising from the use of our services.</p>

        <h3>Changes to Terms</h3>
        <p>We reserve the right to modify these terms at any time. Please check this page periodically for updates.</p>

        <h3>Contact Us</h3>
        <p>If you have any questions about these Terms and Conditions, please contact us at [email address].</p>
      </Content>
    </TermsContainer>
  );
};

export default TermsAndConditions;
