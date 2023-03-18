import { render, screen } from '@testing-library/react';
import Label from './Label';

const text = 'Some text';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <Label /> component', () => {
  test('should to render the label', () => {
    render(<Label>{text}</Label>);
    screen.getByText(text);
  });
});
