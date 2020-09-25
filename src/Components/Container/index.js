import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 10px;
  margin: 0 auto;

  ${({ theme }) => theme.mq.sm} {
    width: 750px;
  }

  ${({ theme }) => theme.mq.md} {
    width: 970px;
  }

  ${({ theme }) => theme.mq.lg} {
    width: 1170px;
  }

  ${({ theme }) => theme.mq.xlg} {
    width: 1470px;
  }
`;

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
