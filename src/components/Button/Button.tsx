import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $backgroundColor?: string; disabled?: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  width: 100%;
  max-width: 300px;
  
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.$backgroundColor || '#007bff'};
  color: ${(props) => (props.disabled ? '#666666' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#cccccc' : '#0056b3')};
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor,
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      data-testid="button"
    >
      {text}
    </StyledButton>
  );
};