import React from "react";
import {render,screen, fireEvent} from "@testing-library/react";
import ListItem from "./ListItem.jsx";

describe('List item test', () => {
    it('snapshot', () => {
        const listItem = render(<ListItem/>)
        expect(listItem).toMatchSnapshot()
    });

    it('test list item', () => {
        const listItem = render(<ListItem classNames={'test-class'}>test</ListItem>)

        expect(listItem.getByText('test')).toBeInTheDocument()
    });

    it('test prop classNames', () => {
        const listItem = render(<ListItem classNames={'test-class'}>test</ListItem>)

        expect(listItem.getByText('test')).toHaveClass('test-class')
    });

    it('test prop id', () => {
        const listItem = render(<ListItem id={'test-id'}>test</ListItem>)

        expect(listItem.getByText('test')).toHaveAttribute('id', 'test-id')
    });
});