import React from 'react';
import { createRoot } from 'react-dom/client';
import { screen } from '@testing-library/react';
import App from './App';

test('Add to cart link', () => {
  createRoot(document.createElement('div')).render(<App />);
  const titleElements = screen.queryAllByText(/Add to cart:/i);
  expect(titleElements.some((el) => el.textContent === 'Add to')).toBe(false);
});
