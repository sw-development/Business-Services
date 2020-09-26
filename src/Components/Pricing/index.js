import React from "react";
import styled from "styled-components";
import Container from "../Container/index";
import Title from "../Title/index";
import Bg from "../../assets/images/bgPricing.png";

const Wrapper = styled.div`
  background: url("${Bg}") no-repeat center center;
  background-size: cover;
  padding: 100px 0;
`;

const PricingContent = styled.div``;

const SubHeader = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.xxs};
  text-align: center;
  color: #051441;
  margin-bottom: 10px;
`;

const Cards = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.md} {
    margin-top: 100px;
    flex-direction: row;
  }
`;

const Card = styled.div`
  position: relative;
  padding: ${({ main }) => (main ? "100px 50px" : "50px")};
  ${({ main }) => (main ? "z-index: 2;" : null)}
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #32363f;
  margin-bottom: 50px;

  ${({ theme }) => theme.mq.md} {
    margin-bottom: 0;
  }

  &::after {
    content: "";
    z-index: -1;
    border-radius: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: ${({ main }) =>
      main
        ? "0 10px 20px rgba(70, 83, 90, 0.20)"
        : "0 10px 20px rgba(70, 83, 90, 0.1)"};
  }
`;

const CardPrice = styled.span`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 5px;
  ${({ main }) => (main ? "color: #219DF5;" : null)}
`;

const CardCategory = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const CardTheme = styled.span`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 25px;
  ${({ main }) => (main ? "color: #219DF5;" : null)}
`;

const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const CardListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.6rem;
  text-align: center;
`;

const CardButton = styled.button`
  border: none;
  outline: none;
  background-color: ${({ main }) =>
    main ? `${({ theme }) => theme.colors.lightBlue}` : "#ecf5ff"};
  border-radius: 30px;
  padding: 15px 25px;
  color: ${({ main }) => (main ? "#1956CF" : "#71bdf3")};
  font-weight: 700;
  cursor: pointer;
`;

const Pricing = () => {
  return (
    <Wrapper>
      <Container>
        <PricingContent>
          <SubHeader>Pricing Plan</SubHeader>
          <Title>We Have Different Pricing Types To Choose</Title>
          <Cards>
            <Card>
              <CardPrice>19</CardPrice>
              <CardCategory>Weekly Package</CardCategory>
              <CardTheme>Education</CardTheme>
              <CardList>
                <CardListItem>Product Recommendations</CardListItem>
                <CardListItem>Abandoned Cart</CardListItem>
                <CardListItem>Facebook & Instagram Ads</CardListItem>
                <CardListItem>Order Notifications</CardListItem>
              </CardList>
              <CardButton type='button'>Choose Plan</CardButton>
            </Card>
            <Card main={true}>
              <CardPrice main={true}>49</CardPrice>
              <CardCategory>Monthly Package</CardCategory>
              <CardTheme main={true}>Professional</CardTheme>
              <CardList>
                <CardListItem>Product Recommendations</CardListItem>
                <CardListItem>Abandoned Cart</CardListItem>
                <CardListItem>Facebook & Instagram Ads</CardListItem>
                <CardListItem>Order Notifications</CardListItem>
                <CardListItem>Landing Pages</CardListItem>
                <CardListItem>SEO Optimization</CardListItem>
              </CardList>
              <CardButton type='button' main={true}>
                Choose Plan
              </CardButton>
            </Card>
            <Card>
              <CardPrice>149</CardPrice>
              <CardCategory>Yearly Package</CardCategory>
              <CardTheme>Business</CardTheme>
              <CardList>
                <CardListItem>Product Recommendations</CardListItem>
                <CardListItem>Abandoned Cart</CardListItem>
                <CardListItem>Facebook & Instagram Ads</CardListItem>
                <CardListItem>Order Notifications</CardListItem>
              </CardList>
              <CardButton type='button'>Choose Plan</CardButton>
            </Card>
          </Cards>
        </PricingContent>
      </Container>
    </Wrapper>
  );
};

export default Pricing;
