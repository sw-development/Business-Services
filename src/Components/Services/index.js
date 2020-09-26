import React from "react";
import Container from "../Container/index";
import styled from "styled-components";
import Features from "../Features";
import Bg from "../../assets/images/bgServices.png";
import { ReactComponent as PieChart } from "../../assets/images/pie-chart.svg";
import { ReactComponent as Chart } from "../../assets/images/chart.svg";
import { ReactComponent as Megaphone } from "../../assets/images/megaphone.svg";

const Wrapper = styled.div`
  padding: 50px 0;
  background: url("${Bg}") no-repeat center center;
  background-size: contain;

  ${({ theme }) => theme.mq.sm} {
    padding: 100px 0;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 50px 0;

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
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
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #fef8e2;

  &.financialLogo {
    background-color: ${({ theme }) => theme.colors.whiteIce};
  }

  &.marketingLogo {
    background-color: ${({ theme }) => theme.colors.whiteLilac};
  }
`;

const ServicesCircleLogo = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
`;

const ServicesLogoDesc = styled.p`
  color: ${({ theme }) => theme.colors.mischka};
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
        <Features />
        <GridWrapper>
          <Service>
            <ServicesLogo>
              <ServicesCircleLogo>
                <PieChart />
              </ServicesCircleLogo>
            </ServicesLogo>
            <ServicesLogoDesc>Market Research</ServicesLogoDesc>
            <ServicesDescription>
              Market Statistics Growth & Advance Analysis
            </ServicesDescription>
          </Service>
          <Service>
            <ServicesLogo className="financialLogo">
              <ServicesCircleLogo>
                <Chart />
              </ServicesCircleLogo>
            </ServicesLogo>
            <ServicesLogoDesc>Financial Services</ServicesLogoDesc>
            <ServicesDescription>
              Free Consultation & Bank Loan
            </ServicesDescription>
          </Service>
          <Service>
            <ServicesLogo className="marketingLogo">
              <ServicesCircleLogo>
                <Megaphone />
              </ServicesCircleLogo>
            </ServicesLogo>
            <ServicesLogoDesc>Online Marketing</ServicesLogoDesc>
            <ServicesDescription>
              Target Audience & Alexa Ranking
            </ServicesDescription>
          </Service>
        </GridWrapper>
      </Wrapper>
    </Container>
  );
};

export default Services;
