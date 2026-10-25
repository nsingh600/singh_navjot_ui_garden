import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('should render radio button with label', () => {
    render(<RadioButton label="Test Radio" name="test" value="1" />);
    const radio = screen.getByTestId('radio-button');
    expect(radio).toBeVisible();
    expect(screen.getByText('Test Radio')).toBeVisible();
  });
});