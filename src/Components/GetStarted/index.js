import React from "react";
import styled from "styled-components";
import Container from "../Container/index";
import Title from "../Title/index";
import Bg from "../../assets/images/bgGetStarted.png";
import WorldSvg from "../../assets/images/world.svg";

const Wrapper = styled.div`
  background: url("${WorldSvg}") no-repeat center, url("${Bg}") no-repeat center;
  background-size: contain;
  padding: 100px 0;
`;

const GetStartedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputsWrapper = styled.div`
  margin-top: 50px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 10px 20px rgba(70, 83, 90, 0.12);
  padding: 15px 20px;
  max-width: 300px;

  ${({ theme }) => theme.mq.xs} {
    max-width: auto;
    min-width: 500px;
  }

  ${({ theme }) => theme.mq.sm} {
    min-width: 600px;
  }

  ${({ theme }) => theme.mq.md} {
    padding: 30px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1.4rem;
  color: #a0a4ab;
  margin-right: 10px;
  flex: 1 1;

  ${({ theme }) => theme.mq.xs} {
    margin-right: 15px;
  }

  ${({ theme }) => theme.mq.md} {
    font-size: 1.6rem;
  }

  &::placeholder {
    color: #a0a4ab;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 15px;
  padding: 15px;
  color: #1956cf;
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease-in;

  ${({ theme }) => theme.mq.xs} {
    font-size: 1.6rem;
    padding: 20px 25px;
  }

  &:hover {
    background-color: #ecf5ff;
    color: #71bdf3;
  }
`;

const GetStarted = () => {
  return (
    <Wrapper>
      <Container>
        <GetStartedContent>
          <Title>Get Started Instantly</Title>

          <InputsWrapper>
            <Input placeholder='Enter Your Email Address' />
            <Button type='button'>Request a quote</Button>
          </InputsWrapper>
        </GetStartedContent>
      </Container>
    </Wrapper>
  );
};

export default GetStarted;
