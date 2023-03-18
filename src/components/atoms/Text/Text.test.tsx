import { render, screen } from '@testing-library/react';
import Text from './Text';

const text = 'Some text';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <Icon /> component', () => {
  test('should to render icon user ', () => {
    render(<Text>{text}</Text>);
    screen.getByText(text);
  });
});
