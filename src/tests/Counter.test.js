// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initCount = screen.getByTestId('count');
  expect(initCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText('+');
  fireEvent.click(increment);
  const initCount = screen.getByTestId('count');
  expect(initCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText('-');
  fireEvent.click(increment);
  const initCount = screen.getByTestId('count');
  expect(initCount).toHaveTextContent('-1');
});
