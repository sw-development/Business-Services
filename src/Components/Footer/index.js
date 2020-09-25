import React from "react";
import styled from "styled-components";
import companyLogo from "../../assets/images/Solvency.png";
import companyLogoCircle from "../../assets/images/Ellipse 7.png";
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
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.mq.md} {
    width: fit-content;
  }
`;

const Logo = styled.div`
  display: flex;
  content: url(${companyLogo}), url(${companyLogoCircle});
  position: relative;
  img:nth-child(2) {
    position: absolute;
    left: 10px;
    top: 3px;
  }
`;

const Copyrights = styled.p`
  margin: 5px 0;
  display: block;
  color: ${({ theme }) => theme.colors.footerGray};
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

const SocialCircleIcon = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo>
            <img src={companyLogoCircle} alt='Company Logo Circle' />
            <img src={companyLogo} alt='Company Logo' />
          </Logo>
        </LogoWrapper>
        <Copyrights>Copyright @2020. All rights reserved</Copyrights>
        <SocialIcons>
          <SocialCircle>
            <img src={fbAngle} alt='facebook logo' />
            <SocialCircleIcon>
              <img src={fbLogo} alt='facebook logo' />
            </SocialCircleIcon>
          </SocialCircle>
          <SocialCircle>
            <img src={twAngle} alt='twitter logo' />
            <SocialCircleIcon>
              <img src={twLogo} alt='twitter logo' />
            </SocialCircleIcon>
          </SocialCircle>
          <SocialCircle>
            <img src={pintAngle} alt='Pinterest logo' />
            <SocialCircleIcon>
              <img src={pintLogo} alt='Pinterest logo' />
            </SocialCircleIcon>
          </SocialCircle>
        </SocialIcons>
      </Wrapper>
    </Container>
  );
};

export default Footer;
