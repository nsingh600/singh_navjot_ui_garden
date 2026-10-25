import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  const options = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
  ];

  test('should render dropdown with options', () => {
    render(<Dropdown options={options} />);
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeVisible();
    expect(screen.getByText('A')).toBeVisible();
  });
});