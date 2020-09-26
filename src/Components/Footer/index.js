import React from "react";
import styled from "styled-components";
import { Logo } from "../Navigation/index";
import fbLogo from "../../assets/images/fb.png";
import twLogo from "../../assets/images/tw.png";
import pintLogo from "../../assets/images/pint.png";
import fbAngle from "../../assets/images/Rectangle 14.png";
import twAngle from "../../assets/images/Rectangle 15.png";
import pintAngle from "../../assets/images/Rectangle 16.png";
import Container from "../Container/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyrights = styled.p`
  margin: 10px 0;
  display: block;
  color: ${({ theme }) => theme.colors.navyBlue};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: space-between;
  width: 120px;
  img {
    width: 100%;
  }
`;

const SocialCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 3px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  position: absolute;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />

        <Copyrights>Copyright @2020. All rights reserved</Copyrights>

        <SocialIcons>
          <SocialCircle>
            <img src={fbAngle} alt="facebook logo" />
            <SocialLink href="https://facebook.com" target="_blank">
              <img src={fbLogo} alt="facebook logo" />
            </SocialLink>
          </SocialCircle>

          <SocialCircle>
            <img src={twAngle} alt="twitter logo" />
            <SocialLink href="https://twitter.com" target="_blank">
              <img src={twLogo} alt="twitter logo" />
            </SocialLink>
          </SocialCircle>

          <SocialCircle>
            <img src={pintAngle} alt="Pinterest logo" />
            <SocialLink href="https://pinterest.com" target="_blank">
              <img src={pintLogo} alt="Pinterest logo" />
            </SocialLink>
          </SocialCircle>
        </SocialIcons>
      </Wrapper>
    </Container>
  );
};

export default Footer;
