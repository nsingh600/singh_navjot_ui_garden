import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label Component', () => {
  test('should render label text correctly', () => {
    render(<Label text="Test Label" />);
    const label = screen.getByTestId('label');
    expect(label).toBeVisible();
    expect(label).toHaveTextContent('Test Label');
  });
});