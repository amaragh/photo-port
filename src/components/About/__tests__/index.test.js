import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import About from "..";

afterAll(cleanup);

describe('About component', () => {
    // redners About test
    it('renders', () => {
        render(<About />);
    })


    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})