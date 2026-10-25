import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ $color?: string; $fontSize?: string }>`
  font-family: inherit;
  font-size: ${(props) => props.$fontSize || '14px'};
  color: ${(props) => props.$color || '#333333'};
  font-weight: 600;
  display: inline-block;
  margin-bottom: 4px;
`;

export const Label: React.FC<LabelProps> = ({ text, htmlFor, color, fontSize }) => {
  return (
    <StyledLabel htmlFor={htmlFor} $color={color} $fontSize={fontSize} data-testid="label">
      {text}
    </StyledLabel>
  );
};