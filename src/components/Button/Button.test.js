import React from "react";
import {render,screen, fireEvent} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Button from "./Button.jsx";

const handleClick = jest.fn()

describe('Button test', () => {
    it('should', () => {
        const button = render(<Button isOutline>dsdsd dsd test sdd wdwd</Button>)

        expect(button.getByText(/test/i)).toBeInTheDocument()
    });

    it('test props is Outline', () => {
        const button = render(<Button isOutline>test</Button>)

        expect(button.getByText('test')).toHaveClass('outline')
    });

    it('test props href', () => {
        const {container} = render(<Button href='#'>test</Button>)
        const link = container.querySelector('a')

        expect(link).toBeInTheDocument()
    });

    it('test props onClick', () => {
        const {container} = render(<Button onClick={handleClick}>test</Button>)
        const button = container.firstChild
        fireEvent.click(button)

        expect(handleClick).toHaveBeenCalled()
    });

    it('test props type', () => {
        const button = render(<Button isOutline>test</Button>)

        expect(button.getByText('test')).toHaveAttribute('type', 'button')
    });

    it('test props classNames', () => {
        const button = render(<Button classNames={'test-test'}>test</Button>)

        expect(screen.getByText('test')).toHaveClass('test-test')
    });

    it('test Link', () => {
        const {container} = render(<BrowserRouter><Button to={'/'} classNames={'test-test'}>test</Button></BrowserRouter>)
        const link = container.querySelector('a')
        expect(link).toBeInTheDocument()
    });
});