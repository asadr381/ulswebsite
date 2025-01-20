import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 150px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
 color: white;
  font-size: 16px;
  text-transform: uppercase;
  padding: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #34495e;
    border-radius: 5px;
    transform: scale(1.1);
  }
`;


const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/logo.png" alt="ULS Logo" />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
