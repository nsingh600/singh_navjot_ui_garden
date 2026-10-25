import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTd = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #eaeaea;
  color: #333;
  font-size: 14px;
`;

const StyledTh = styled.th`
  padding: 12px 16px;
  border-bottom: 2px solid #ddd;
  background-color: #f8f9fa;
  color: #111;
  font-weight: bold;
  text-align: left;
  font-size: 14px;
`;

export const TableCell: React.FC<TableCellProps> = ({ children, isHeader = false }) => {
  if (isHeader) {
    return <StyledTh>{children}</StyledTh>;
  }
  return <StyledTd>{children}</StyledTd>;
};