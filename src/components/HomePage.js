import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 20px;
  background: url('/assets/banner.jpg') no-repeat center center/cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 48px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 36px; /* Smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const HomePage = () => {
  const heroAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 170, friction: 26 }
  });

  return (
    <HeroSection>
      <animated.div style={heroAnimation}>
        <ContentWrapper>
          <Title>Universal Logistics Services</Title>
          <Subtitle>Your trusted partner in global logistics solutions</Subtitle>
        </ContentWrapper>
      </animated.div>
    </HeroSection>
  );
};

export default HomePage;
