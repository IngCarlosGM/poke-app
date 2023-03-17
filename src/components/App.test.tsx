import { render, screen } from '@testing-library/react';
import App from './App';

test('Testing <App /> component', () => {
  render(<App />);

  screen.getByText('Carlos Gamboa');
});
