import React from "react";
import styled from "styled-components";
import Container from "../Container/index";
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";
import Title from "../Title/index";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(1, 1fr);

  ${({ theme }) => theme.mq.md} {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SubHeader = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxs};
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.3s all linear;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(70, 83, 90, 7%);

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => theme.mq.md} {
    padding: 40px;
  }
`;

const CardProfile = styled.div`
  display: flex;
  align-items: center;
`;

const CardProfilePhoto = styled.div`
  margin-right: 15px;
`;

const CardPerson = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardPersonName = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.xs};
`;

const CardDate = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

const CardTitle = styled.p`
  margin: 7px 0;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.sm};
`;

const CardContentDescription = styled.p`
  margin-top: 10px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.cardDescription};
`;

const News = () => {
  return (
    <Container>
      <SubHeader>Our blog</SubHeader>
      <Title>Our Companies News</Title>
      <Wrapper>
        <Card>
          <CardProfile>
            <CardProfilePhoto>
              <img src={news1} alt='news one' />
            </CardProfilePhoto>
            <CardPerson>
              <CardPersonName>Adam Smith</CardPersonName>
              <CardDate>08 Aug 2019</CardDate>
            </CardPerson>
          </CardProfile>
          <CardTitle>Saas Lending Solution for Loans company</CardTitle>
          <CardContentDescription>
            These folk are energized with a complex problem and breaking
            grappling ullamco with a complex problem . . . . .
          </CardContentDescription>
        </Card>
        <Card>
          <CardProfile>
            <CardProfilePhoto>
              <img src={news2} alt='news two' />
            </CardProfilePhoto>
            <CardPerson>
              <CardPersonName>Creamer Jens</CardPersonName>
              <CardDate>09 May 2019</CardDate>
            </CardPerson>
          </CardProfile>
          <CardTitle>Build your audience and grow your brand</CardTitle>
          <CardContentDescription>
            These folk are energized with a complex problem and breaking
            grappling ullamco with a complex problem . . . . .
          </CardContentDescription>
        </Card>
        <Card>
          <CardProfile>
            <CardProfilePhoto>
              <img src={news3} alt='news three' />
            </CardProfilePhoto>
            <CardPerson>
              <CardPersonName>Mack Jones</CardPersonName>
              <CardDate>13 Jan 2019</CardDate>
            </CardPerson>
          </CardProfile>
          <CardTitle>
            Learn more about our full stack of brand building tools
          </CardTitle>
          <CardContentDescription>
            These folk are energized with a complex problem and breaking
            grappling ullamco with a complex problem . . . . .
          </CardContentDescription>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default News;
