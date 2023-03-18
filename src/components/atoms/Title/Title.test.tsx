import { render, screen } from '@testing-library/react';
import Title from './Title';

const text = 'Some text';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <Text /> component', () => {
  test('should to render the title without a especific type. Default h1', () => {
    render(<Title>{text}</Title>);
    screen.getByText(text);
    screen.getByRole('heading', { level: 1 });
    expect(screen).toMatchSnapshot();
  });

  test('should to render the title with type h1', () => {
    render(<Title type='h1'>{text}</Title>);
    screen.getByRole('heading', { level: 1 });
    screen.getByText(text);
    expect(screen).toMatchSnapshot();
  });

  test('should to render the title with type h2', () => {
    render(<Title type='h2'>{text}</Title>);
    screen.getByRole('heading', { level: 2 });
    screen.getByText(text);
    expect(screen).toMatchSnapshot();
  });

  test('should to render the title with type h2', () => {
    render(<Title type='h3'>{text}</Title>);
    screen.getByRole('heading', { level: 3 });
    screen.getByText(text);
    expect(screen).toMatchSnapshot();
  });
});
