import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ size?: string; $color?: string }>`
  font-family: inherit;
  margin: 0 0 10px 0;
  color: ${(props) => props.$color || '#555555'};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small': return '12px';
      case 'large': return '18px';
      default: return '14px';
    }
  }};
`;

export const Text: React.FC<TextProps> = ({ content, size = 'medium', color }) => {
  return (
    <StyledText size={size} $color={color} data-testid="text">
      {content}
    </StyledText>
  );
};