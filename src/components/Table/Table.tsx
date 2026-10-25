import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: inherit;
  background-color: #ffffff;
`;

export const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledTable data-testid="table">{children}</StyledTable>;
};