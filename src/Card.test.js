import React from "react";
import { render } from '@testing-library/react';
import Card from "./Card";

it('should render', () => {
    render(<Card  />)
});

it('should match snapshot', () => {
    const {asFragment} = render(<Card caption='Photo by Richard Pasquarella on Unsplash' />)
    expect(asFragment()).toMatchSnapshot();
});