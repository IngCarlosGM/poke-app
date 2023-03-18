import { render, screen } from '@testing-library/react';
import Text from './Text';

const text = 'Some text';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <Text /> component', () => {
  test('should to render text ', () => {
    render(<Text>{text}</Text>);
    screen.getByText(text);
  });
});
