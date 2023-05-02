
import React from 'react';
import { createRoot } from 'react-dom/client';
import { screen, fireEvent } from '@testing-library/react';
import { CartList } from "./cartlist";

test('Add to cart link', () => {
    createRoot(document.createElement('div')).render(<CartList />);
    const buttonElements = screen.queryAllByText(/delete/i);
    if (buttonElements.length != 0)
        fireEvent.click(buttonElements[0]);
});
