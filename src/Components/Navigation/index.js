import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/images/Logo.svg";
import { ReactComponent as Basket } from "../../assets/images/Basket.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";

const Nav = styled.nav`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(LogoSvg)`
  width: 100px;
  height: 50px;
`;

const NavBtn = styled.button`
  position: relative;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  z-index: 2;

  ${({ theme }) => theme.mq.md} {
    display: none;
  }
`;

const NavBtnBox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const NavBtnInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${({ navStatus }) => (navStatus ? "transparent" : "#111")};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &::before,
  &::after {
    width: 100%;
    height: 3px;
    background-color: #111;
    position: absolute;
    content: "";
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
  }

  &::before {
    top: -10px;
    transform: ${({ navStatus }) =>
      navStatus ? "translateY(10px) rotate(45deg)" : "translateY(0) rotate(0)"};
  }

  &::after {
    top: 10px;
    transform: ${({ navStatus }) =>
      navStatus
        ? "translateY(-10px) rotate(-45deg)"
        : "translateY(0) rotate(0)"};
  }
`;

const NavList = styled.ul`
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 1;
  transform: ${({ navStatus }) =>
    navStatus ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in;

  ${({ theme }) => theme.mq.md} {
    background-color: transparent;
    position: static;
    flex-direction: row;
    height: auto;
    width: auto;
    transform: none;
  }
`;

const NavListItem = styled.li`
  margin-bottom: 10px;
  text-transform: uppercase;

  ${({ theme }) => theme.mq.md} {
    margin: 0 0 0 15px;
  }
`;

const NavActions = styled.div`
  display: none;

  ${({ theme }) => theme.mq.md} {
    display: inline-block;
  }
`;

const NavLink = styled.a`
  font-family: "Roboto";
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const menuItems = ["Home", "Services", "Pricing", "Blog"];

const Navigation = () => {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <Nav>
      <Logo />
      <NavBtn onClick={() => setNavStatus(!navStatus)}>
        <NavBtnBox>
          <NavBtnInner navStatus={navStatus} />
        </NavBtnBox>
      </NavBtn>

      <NavList navStatus={navStatus}>
        {menuItems.map((item, index) => (
          <NavListItem key={index}>
            <NavLink href='#'>{item}</NavLink>
          </NavListItem>
        ))}
      </NavList>

      <NavActions>
        <Search />
        <Basket />
      </NavActions>
    </Nav>
  );
};

export default Navigation;
