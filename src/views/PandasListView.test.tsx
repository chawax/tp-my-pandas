import { render, screen } from '@testing-library/react';
import PandasListView from './PandasListView';

test('renders a list of pandas', () => {
  render(<PandasListView />);
  const pandaElement = screen.getByText(/Yuan Meng/i);
  expect(pandaElement).toBeInTheDocument();
});
