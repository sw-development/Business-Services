import React from "react";
import styled from "styled-components";
import Container from "../Container/index";
import { solution, company, products } from "./newsletterListItems";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  padding: 50px 0;

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    padding: 100px 0;
  }
`;

const NewsletterCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  margin: 5px 0;

  ${({ theme }) => theme.mq.md} {
    align-items: flex-start;
  }
`;

const NewsletterHeader = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: 10px;
`;

const NewsletterList = styled.ul`
  list-style: none;
`;

const NewsletterListItem = styled.li`
  margin: 4px 0;
  display: flex;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.size.xxs};
  text-align: center;

  ${({ theme }) => theme.mq.md} {
    text-align: left;
  }
`;

const NewsletterLink = styled.a`
  width: 100%;
`;

const NewsletterParagraph = styled.p`
  margin-bottom: 15px;
  display: flex;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.size.xxs};
  text-align: center;

  ${({ theme }) => theme.mq.md} {
    text-align: left;
  }
`;

const NewsletterLabel = styled.label`
  display: block;
  position: relative;
`;

const NewsletterInput = styled.input`
  height: 100%;

  padding: 10px 10px;
  background-color: #f9f9f9;
  border: none;
`;

const NewsletterBtn = styled.button`
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 10px 10px;
  border: 1px solid transparent;
  outline-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: 0.3s all linear;

  &:hover {
    color: ${({ theme }) => theme.colors.darkBlue};
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  }
`;

const renderListItems = (arr) => {
  return arr.map((element, index) => {
    return (
      <NewsletterListItem key={index}>
        <NewsletterLink href="#">{element}</NewsletterLink>
      </NewsletterListItem>
    );
  });
};

const Newsletter = () => {
  return (
    <Container>
      <Wrapper>
        <NewsletterCard>
          <NewsletterHeader>Solution</NewsletterHeader>
          <NewsletterList>{renderListItems(solution)}</NewsletterList>
        </NewsletterCard>

        <NewsletterCard>
          <NewsletterHeader>Company</NewsletterHeader>
          <NewsletterList>{renderListItems(company)}</NewsletterList>
        </NewsletterCard>

        <NewsletterCard>
          <NewsletterHeader>Products</NewsletterHeader>
          <NewsletterList>{renderListItems(products)}</NewsletterList>
        </NewsletterCard>

        <NewsletterCard>
          <NewsletterHeader>Stay Us</NewsletterHeader>
          <NewsletterParagraph>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form by injected.
          </NewsletterParagraph>
          <NewsletterParagraph>
            <NewsletterLabel htmlFor="email">
              <NewsletterInput
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </NewsletterLabel>
            <NewsletterBtn placeholder="Click to subscribe">
              Subscribe
            </NewsletterBtn>
          </NewsletterParagraph>
        </NewsletterCard>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
