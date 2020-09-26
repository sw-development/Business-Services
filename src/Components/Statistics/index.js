import React from "react";
import styled from "styled-components";
import Container from "../Container/index";

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  align-items: center;
  background-color: #fafbff;
`;

const StatWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    width: 80%;
    margin: 0 auto;
  } ;
`;

const Statisctic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  margin: 5px;
`;

const StatisticHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.xbold};
  margin-bottom: 5px;
  height: 100%;
  text-align: center;
`;

const StatiscticParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: #a0a4ab;
  height: 100%;
  text-align: center;
`;

const Statistics = () => {
  return (
    <Wrapper>
      <Container>
        <StatWrapper>
          <Statisctic>
            <StatisticHeader>3258+</StatisticHeader>
            <StatiscticParagraph>Completed Projects</StatiscticParagraph>
          </Statisctic>
          <Statisctic>
            <StatisticHeader>25</StatisticHeader>
            <StatiscticParagraph>Outside Offices</StatiscticParagraph>
          </Statisctic>
          <Statisctic>
            <StatisticHeader>55k</StatisticHeader>
            <StatiscticParagraph>Worldwide Users</StatiscticParagraph>
          </Statisctic>
          <Statisctic>
            <StatisticHeader>35</StatisticHeader>
            <StatiscticParagraph>Award Winner</StatiscticParagraph>
          </Statisctic>
        </StatWrapper>
      </Container>
    </Wrapper>
  );
};

export default Statistics;
