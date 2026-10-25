import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr`
  border-bottom: 1px solid #e9ecef;
  &:hover {
    background-color: #f1f3f5;
  }
`;

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledRow data-testid="table-row">{children}</StyledRow>;
};