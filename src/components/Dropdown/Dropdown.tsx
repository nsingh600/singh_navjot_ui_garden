import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.disabled ? '#f0f0f0' : '#ffffff')};
  color: ${(props) => (props.disabled ? '#888888' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
  max-width: 300px;
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, selectedValue, onChange, disabled = false }) => {
  return (
    <StyledSelect
      value={selectedValue}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange && onChange(e.target.value)}
      disabled={disabled}
      data-testid="dropdown"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};