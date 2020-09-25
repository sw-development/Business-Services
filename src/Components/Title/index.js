import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.sm};

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.md};
  }

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

const Title = ({ children }) => <TitleWrapper>{children}</TitleWrapper>;

export default Title;
