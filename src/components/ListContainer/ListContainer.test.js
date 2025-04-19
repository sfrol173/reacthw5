import React from "react";
import {render,screen, fireEvent} from "@testing-library/react";
import ListContainer from "./ListContainer.jsx";

describe('List container test', () => {
    it('snapshot', () => {
        const listContainer = render(<ListContainer/>)
        expect(listContainer).toMatchSnapshot()
    });

    it('test list container', () => {
        const listContainer = render(<ListContainer classNames={'test-class'}>test</ListContainer>)

        expect(listContainer.getByText('test')).toBeInTheDocument()
    });

    it('test prop classNames', () => {
        const listContainer = render(<ListContainer classNames={'test-class'}>test</ListContainer>)

        expect(listContainer.getByText('test')).toHaveClass('test-class')
    });
});