import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('TableRow Component', () => {
  test('should render table row', () => {
    render(<table><tbody><TableRow><td>Row Item</td></TableRow></tbody></table>);
    const row = screen.getByTestId('table-row');
    expect(row).toBeVisible();
  });
});