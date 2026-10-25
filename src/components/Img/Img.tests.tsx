import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img Component', () => {
  test('should render image with correct src and alt', () => {
    render(<Img src="test.jpg" alt="Sample Image" />);
    const img = screen.getByTestId('img');
    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', 'test.jpg');
    expect(img).toHaveAttribute('alt', 'Sample Image');
  });
});