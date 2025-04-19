import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Input from "./Input.jsx";

const handleChange = jest.fn()

describe('Input test', () => {
    it('test label clasName', () => {
        const {container} = render(<Input id={'test'}/>)
        const label = container.querySelector('label')

        expect(label).toHaveClass('input-wrapper')
    });

    it('test input id', () => {
        const {container} = render(<Input id={'test'}/>)
        const input = container.querySelector('input')

        expect(input).toHaveAttribute('id', 'test')
    });

    it('test input type', () => {
        const {container} = render(<Input id={'test'}/>)
        const input = container.querySelector('input')

        expect(input).toHaveAttribute('type', 'text')
    });

    it('test input type change', () => {
        const {container} = render(<Input type={'test-type'} id={'test'}/>)
        const input = container.querySelector('input')

        expect(input).toHaveAttribute('type', 'test-type')
    });


    it('test input placeholder', () => {
        const input = render(<Input id={'test'} placeholder={'test-text'}/>)

        expect(input.getByPlaceholderText('test-text')).toBeInTheDocument()
    });

    it('test props onChange', () => {
        const {container} = render(<Input id={'test'} placeholder={'test-text'} onChange={handleChange}/>)
        const input = container.querySelector('input')
        fireEvent.change(input, {
            target: {
                defaultValue: 'test value',
                value: 'test-value'
            }
        })

        expect(handleChange).toHaveBeenCalled()
    });
})