import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Testing <Image /> component', () => {
  const text: string = 'Test';
  test('should to render the image with its props', () => {
    const { getByText } = render(<Badge>{text}</Badge>);
    expect(screen).toMatchSnapshot();
    getByText(text);
  });
});
