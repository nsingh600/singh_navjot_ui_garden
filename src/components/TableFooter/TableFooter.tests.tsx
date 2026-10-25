import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';

describe('TableFooter Component', () => {
  test('should render table footer', () => {
    render(<table><TableFooter><tr><td>Footer Info</td></tr></TableFooter></table>);
    const footer = screen.getByTestId('table-footer');
    expect(footer).toBeVisible();
  });
});