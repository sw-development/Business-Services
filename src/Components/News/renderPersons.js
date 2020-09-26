import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
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

export const renderPersons = (arr) => {
  return arr.map((element, index) => {
    const { img, name, date, title, description } = element;
    return (
      <Card key={index}>
        <CardProfile>
          <CardProfilePhoto>
            <img src={img} alt='news' />
          </CardProfilePhoto>
          <CardPerson>
            <CardPersonName>{name}</CardPersonName>
            <CardDate>{date}</CardDate>
          </CardPerson>
        </CardProfile>
        <CardTitle>{title}</CardTitle>
        <CardContentDescription>{description}</CardContentDescription>
      </Card>
    );
  });
};
