import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableHeader } from './TableHeader';

describe('TableHeader Component', () => {
  test('should render table header', () => {
    render(<table><TableHeader><tr><th>Header</th></tr></TableHeader></table>);
    const header = screen.getByTestId('table-header');
    expect(header).toBeVisible();
  });
});