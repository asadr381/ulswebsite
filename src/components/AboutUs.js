import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const OfficesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const OfficeCard = styled(animated.div)`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const OfficeTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const OfficeDetails = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const AboutUs = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  const offices = [
    {
      city: 'HEAD OFFICE KARACHI',
      address: 'D-79, Block 5, Kehkashan Clifton, Karachi, Pakistan',
      phone: '+92-21-35148129-31',
      una: 'UNA: +92-21-111-669-877',
    }
  ];

  return (
    <AboutContainer>
      <animated.div style={fadeIn}>
        <Title>About Universal Logistics Services (ULS)</Title>
        <Description>
          Universal Logistics Services (ULS) partners with UPS for seamless import and export of international shipments.
          We offer competitive shipping rates while ensuring high on-time delivery rates. Trusted by corporate customers worldwide.
        </Description>
      </animated.div>

      <OfficesGrid>
        {offices.map((office, index) => (
          <OfficeCard key={index} style={{ ...fadeIn, delay: 300 + index * 100 }}>
            <OfficeTitle>{office.city} Office</OfficeTitle>
            <OfficeDetails><strong>Address:</strong> {office.address}</OfficeDetails>
            <OfficeDetails><strong>Phone:</strong> {office.phone}</OfficeDetails>
            <OfficeDetails><strong>{office.una}</strong></OfficeDetails>
          </OfficeCard>
        ))}
      </OfficesGrid>
    </AboutContainer>
  );
};

export default AboutUs;
