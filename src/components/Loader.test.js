import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render , screen } from '@testing-library/react';
import Loader from './Loader';

test('render dots container' , () => {
    render(<Loader />);
    expect(screen.getByTestId('dots-container')).toBeInTheDocument();
});
