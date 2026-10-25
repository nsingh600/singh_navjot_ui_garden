import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table Component', () => {
  test('should render table element', () => {
    render(<Table><tbody><tr><td>Data</td></tr></tbody></Table>);
    const table = screen.getByTestId('table');
    expect(table).toBeVisible();
  });
});