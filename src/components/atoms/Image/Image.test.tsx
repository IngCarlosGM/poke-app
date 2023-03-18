import { render, screen } from '@testing-library/react';
import Image from './Image';

describe('Testing <Image /> component', () => {
  test('should to render the image with its props', () => {
    render(
      <Image
        source='httts://images.com/1'
        altText='Test alt'
        height='200px'
        width='300px'
      />
    );
    expect(screen).toMatchSnapshot();
    screen.debug();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test alt');
    expect(screen.getByRole('img')).toHaveAttribute('height', '200px');
    expect(screen.getByRole('img')).toHaveAttribute('width', '300px');
  });
});
