import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Navigation from "../Navigation";
import HeroImg from "../../assets/images/heroImg.png";
import { ReactComponent as PlayButtonSvg } from "../../assets/images/play-button.svg";
import Bg from "../../assets/images/bgHero.png";

const Wrapper = styled.header`
  background: url("${Bg}") no-repeat center center, #f3fbff;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  padding: 50px 0;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.midnightExpress};
  max-width: 650px;
  text-align: center;

  ${({ theme }) => theme.mq.xs} {
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.font.size.xlg};
  }
`;

const ActionsWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

const PrimaryButton = styled.button`
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 20px;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.xxs};
  cursor: pointer;
  transition: all 0.3s ease-in;
  margin-right: 25px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size.xxs};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const PlayButton = styled(PlayButtonSvg)`
  margin-left: 10px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 550px;
  flex: 1 1;
`;

const Hero = () => (
  <Wrapper>
    <Container>
      <HeroContent>
        <Navigation />

        <Content>
          <Heading>Get Business Solutions With Solvency</Heading>
          <ActionsWrapper>
            <PrimaryButton type="button">Explore More</PrimaryButton>
            <SecondaryButton type="button">
              See Live Demo <PlayButton />
            </SecondaryButton>
          </ActionsWrapper>

          <Img src={HeroImg} alt="Computer" />
        </Content>
      </HeroContent>
    </Container>
  </Wrapper>
);

export default Hero;
