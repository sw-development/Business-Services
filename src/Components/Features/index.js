import React from "react";
import styled from "styled-components";
import Container from "../Container/index";
import Title from "../Title/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubHeader = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.xxs};
  text-align: center;
  color: #051441;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: #051441;
`;

const Features = () => {
  return (
    <Container>
      <Wrapper>
        <SubHeader>Features</SubHeader>
        <Title>Our Provided Features</Title>
        <Paragraph>Business Services</Paragraph>
      </Wrapper>
    </Container>
  );
};

export default Features;
