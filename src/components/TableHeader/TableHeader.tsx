import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledThead = styled.thead`
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  text-align: left;
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledThead data-testid="table-header">{children}</StyledThead>;
};