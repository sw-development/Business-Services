import React from "react";
import styled from "styled-components";
import Container from "../Container/index";
import Bg from "../../assets/images/bgNews.png";
import Title from "../Title/index";
import { Persons } from "./persons";
import { renderPersons } from "./renderPersons";

const NewsWrapper = styled.div`
  background: url("${Bg}") no-repeat center;

  padding: 50px 0;

  ${({ theme }) => theme.mq.sm} {
    padding: 100px 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(1, 1fr);
  padding: 20px;

  ${({ theme }) => theme.mq.md} {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);
    padding: 50px;
  }
`;

const SubHeader = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxs};
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const News = () => {
  return (
    <NewsWrapper>
      <Container>
        <SubHeader>Our blog</SubHeader>

        <Title>Our Companies News</Title>

        <Wrapper>{renderPersons(Persons)}</Wrapper>
      </Container>
    </NewsWrapper>
  );
};

export default News;
