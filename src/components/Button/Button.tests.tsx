import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('should be visible in the document', () => {
    render(<Button text="Test Button" />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeVisible();
  });

  test('should change background color and cursor when disabled', () => {
    render(<Button text="Disabled Button" disabled={true} />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveStyle('background-color: #cccccc');
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });
});