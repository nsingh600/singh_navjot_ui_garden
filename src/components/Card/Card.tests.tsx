import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  test('should render card with title and children', () => {
    render(<Card title="Test Card">Card Content</Card> );
    expect(screen.getByTestId('card')).toBeVisible();
    expect(screen.getByText('Test Card')).toBeVisible();
    expect(screen.getByText('Card Content')).toBeVisible();
  });
});