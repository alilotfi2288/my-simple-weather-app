import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';

test('title display properly', () => {
    render(<NavBar />);
    let title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
    expect(title.innerHTML).toBe('Weather App');
});
test('unit spans display properly', () => {
    render(<NavBar />);
    let spans = [screen.getByText('C'), screen.getByText('F')];
    spans.forEach(span => {
        expect(span).toBeInTheDocument();
    });
});
test('input changing test', () => {
    render(<NavBar />);
    let input = screen.getByPlaceholderText('city name...');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(input.value).toEqual('hello');
});
test('snapShot testing', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
});
