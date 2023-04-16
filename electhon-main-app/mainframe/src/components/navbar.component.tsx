import styled from '@emotion/styled';
import React from 'react'
import { Logo } from '../assets';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  color: #fff;
  padding: 1rem;
`;

const LogoImage = styled.img`
    height: 50px;
    cursor: pointer;
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1rem;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;

const NewFlag = styled.span`
  background-color: #ff0000;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -20px;
  margin-top: -5px;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  background: linear-gradient(45deg, #1976D2, #6dd5e5);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;


const NavbarComponent = () => {

  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <LogoImage src={Logo} onClick={() => navigate("/")}>
      </LogoImage>

      <NavLinks>
        <NavItem>
          <Button color="primary" onClick={() => navigate("/")}> Home </Button>
        </NavItem>

        <NavItem>
          <NewFlag>New</NewFlag>
          <Button color="primary" onClick={() => navigate("/register")}> Digivoter Registration </Button>
        </NavItem>

        <NavItem style={{ marginLeft: '20px' }}>
          {/* <Button color="primary" variant='contained'> Login/Register </Button> */}
          <LoginButton onClick={() => navigate("/login")}>Login/Register</LoginButton>
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  )
}

export default NavbarComponent