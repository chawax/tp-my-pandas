import { render, screen } from '@testing-library/react';
import React from 'react';
import PandasListView from './';

test('renders a list of pandas', () => {
  render(<PandasListView />);
  const pandaElement = screen.getByText(/Yuan Meng/i);
  expect(pandaElement).toBeInTheDocument();
});
