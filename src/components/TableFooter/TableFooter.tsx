import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTfoot = styled.tfoot`
  background-color: #f8f9fa;
  font-weight: 600;
  border-top: 2px solid #dee2e6;
`;

export const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTfoot data-testid="table-footer">{children}</StyledTfoot>;
};