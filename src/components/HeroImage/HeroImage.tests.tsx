import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('should render hero title and background', () => {
    render(<HeroImage bgImage="test.jpg" title="Welcome Hero" />);
    const hero = screen.getByTestId('hero-image');
    expect(hero).toBeVisible();
    expect(screen.getByText('Welcome Hero')).toBeVisible();
  });
});