import React from "react";
import Container from "../Container/index";
import styled from "styled-components";
import ellipse1 from "../../assets/images/Ellipse 1.png";
import ellipse2 from "../../assets/images/Ellipse 2.png";
import ellipse3 from "../../assets/images/Ellipse 3.png";
import service1 from "../../assets/images/services1.png";
import service2 from "../../assets/images/services2.png";
import service3 from "../../assets/images/services3.png";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding-bottom: 40px;

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    padding-bottom: 120px;
  }
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

const ServicesLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 3px;
`;

const ServicesCircleLogo = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
`;

const ServicesLogoDesc = styled.p`
  color: #9ca0aa;
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-align: center;
  margin: 12px 0;
`;

const ServicesDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.cardDescription};
  text-align: center;
  width: 100%;

  ${({ theme }) => theme.mq.md} {
    width: 70%;
  }
`;

const Services = () => {
  return (
    <Container>
      <Wrapper>
        <Service>
          <ServicesLogo>
            <img src={ellipse1} alt='ellipse' />
            <ServicesCircleLogo>
              <img src={service1} alt='service' />
            </ServicesCircleLogo>
          </ServicesLogo>
          <ServicesLogoDesc>Market Research</ServicesLogoDesc>
          <ServicesDescription>
            Market Statistics Growth & Advance Analysis
          </ServicesDescription>
        </Service>
        <Service>
          <ServicesLogo>
            <img src={ellipse2} alt='ellipse' />
            <ServicesCircleLogo>
              <img src={service2} alt='service' />
            </ServicesCircleLogo>
          </ServicesLogo>
          <ServicesLogoDesc>Financial Services</ServicesLogoDesc>
          <ServicesDescription>
            Free Consultation & Bank Loan
          </ServicesDescription>
        </Service>
        <Service>
          <ServicesLogo>
            <img src={ellipse3} alt='ellipse' />
            <ServicesCircleLogo>
              <img src={service3} alt='service' />
            </ServicesCircleLogo>
          </ServicesLogo>
          <ServicesLogoDesc>Online Marketing</ServicesLogoDesc>
          <ServicesDescription>
            Target Audience & Alexa Ranking
          </ServicesDescription>
        </Service>
      </Wrapper>
    </Container>
  );
};

export default Services;
