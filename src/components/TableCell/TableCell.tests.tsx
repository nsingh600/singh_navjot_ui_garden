import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell Component', () => {
  test('should render standard table cell', () => {
    render(<table><tbody><tr><TableCell>Test Value</TableCell></tr></tbody></table>);
    const cell = screen.getByTestId('table-cell');
    expect(cell).toBeVisible();
    expect(cell).toHaveTextContent('Test Value');
  });
});