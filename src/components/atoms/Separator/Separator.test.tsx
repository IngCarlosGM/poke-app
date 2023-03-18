import { render, screen } from '@testing-library/react';
import Separator from './Separator';

describe('Testing <Separator /> component', () => {
  test('should to render the separator hr', () => {
    render(<Separator />);
    expect(screen.getByRole('separator')).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
});
