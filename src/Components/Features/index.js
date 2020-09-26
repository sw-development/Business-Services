import React from "react";
import styled from "styled-components";
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
  color: ${({ theme }) => theme.colors.midnightExpress};
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.midnightExpress};
`;

const Features = () => {
  return (
    <Wrapper>
      <SubHeader>Features</SubHeader>
      <Title>Our Provided Features</Title>
      <Paragraph>Business Services</Paragraph>
    </Wrapper>
  );
};

export default Features;
