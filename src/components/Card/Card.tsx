import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ $backgroundColor?: string }>`
  background-color: ${(props) => props.$backgroundColor || '#ffffff'};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  width: 100%;
`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 18px;
  color: #333333;
`;

export const Card: React.FC<CardProps> = ({ title, children, backgroundColor }) => {
  return (
    <StyledCard $backgroundColor={backgroundColor} data-testid="card">
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </StyledCard>
  );
};