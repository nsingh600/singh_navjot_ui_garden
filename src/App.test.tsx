import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI Component Garden header', () => {
  render(<App />);
  const headerElement = screen.getByText(/UI Component Garden/i);
  expect(headerElement).toBeInTheDocument();
});
