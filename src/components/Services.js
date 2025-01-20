import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const ServicesContainer = styled.section`
  padding: 50px;
  background-color: #ecf0f1;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  text-align: center;
  flex-basis: 30%;
`;

const ServiceTitle = styled.h3`
  color: #2c3e50;
`;

const Services = () => {
  const serviceCardAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(30px)' },
    delay: 200,
    config: { tension: 170, friction: 26 }
  });

  return (
    <ServicesContainer>
      <h2>Our Services</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <animated.div style={serviceCardAnimation}>
          <ServiceCard>
            <ServiceTitle>Sea Freight</ServiceTitle>
            <p>Global sea freight services with the best rates.</p>
          </ServiceCard>
        </animated.div>
        <animated.div style={serviceCardAnimation}>
          <ServiceCard>
            <ServiceTitle>Air Freight</ServiceTitle>
            <p>Fast and secure air transportation for your goods.</p>
          </ServiceCard>
        </animated.div>
        <animated.div style={serviceCardAnimation}>
          <ServiceCard>
            <ServiceTitle>Warehousing</ServiceTitle>
            <p>Safe storage and handling of your products.</p>
          </ServiceCard>
        </animated.div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
