import React from "react";
import {render,screen, fireEvent} from "@testing-library/react";
import InputFormik from "./InputFormik.jsx";

describe('InputFormik test', () => {
    it('snapshot', () => {
        const inputFormik = render(<InputFormik type={'text'}
                                                name={'test-name'}
                                                label={'test-label'}
                                                classNames={'test-class'}/>)
        expect(inputFormik).toMatchSnapshot()
    });

    it('test props type', () => {
        const {container} = render(<InputFormik name={'test-name'} label={'test-label'}/>)
        const input = container.querySelector('input')

        expect(input).toHaveAttribute('type', 'text')
    });

    it('test has label', () => {
        const {container} = render(<InputFormik type={'text'} name={'test-name'} label={'test-label'}/>)
        const label = container.querySelector('label')

        expect(label).toBeInTheDocument()
    });

    it('test has "p"', () => {
        const {container} = render(<InputFormik type={'text'} name={'test-name'} label={'test-label'}/>)
        const p = container.querySelector('p')

        expect(p).toBeInTheDocument()
    });

    it('test no render errorMessage', () => {
        const inputFormik = render(<InputFormik type={'text'} name={'test-name'} label={'test-label'} errorMessage={'test-error'}/>)


        expect(inputFormik.queryByText('test-error')).toBeNull()
    });

    it('test prop ClassNames', () => {
        const {container} = render(<InputFormik type={'text'}
                                                name={'test-name'}
                                                label={'test-label'}
                                                classNames={'test-class'}/>)
        const label = container.querySelector('label')


        expect(label).toHaveClass('test-class')
    });

    it('test ClassName on error', () => {
        const {container} = render(<InputFormik type={'text'}
                                                name={'test-name'}
                                                label={'test-label'}
                                                classNames={'test-class'}
                                                error={true}/>)
        const label = container.querySelector('label')


        expect(label).toHaveClass('has-validation')
    });

    it('test render errorMessage on error', () => {
        const {container} = render(<InputFormik type={'text'}
                                                name={'test-name'}
                                                label={'test-label'}
                                                classNames={'test-class'}
                                                error={true}
                                                errorMessage={'error-message'}/>)
        const errorMessage = container.querySelector('.error-message')


        expect(errorMessage).toBeInTheDocument()
    });

    it('test props isPhone', () => {
        const {container} = render(<InputFormik type={'text'}
                                                name={'test-name'}
                                                label={'test-label'}
                                                classNames={'test-class'}
                                                isPhone={true}
                                                />)
        const input = container.querySelector('input')


        expect(input).toBeInTheDocument()
    });
})