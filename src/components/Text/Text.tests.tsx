import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text Component', () => {
  test('should render text content', () => {
    render(<Text content="Hello World" />);
    const textEl = screen.getByTestId('text');
    expect(textEl).toBeVisible();
    expect(textEl).toHaveTextContent('Hello World');
  });
});