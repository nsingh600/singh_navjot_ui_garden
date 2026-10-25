import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioWrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${(props) => (props.disabled ? '#999999' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const StyledRadioInput = styled.input`
  accent-color: #007bff;
  cursor: inherit;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <RadioWrapper disabled={disabled} data-testid="radio-wrapper">
      <StyledRadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        data-testid="radio-button"
      />
      {label}
    </RadioWrapper>
  );
};