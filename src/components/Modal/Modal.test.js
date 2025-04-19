import React from "react";
import {createEvent, fireEvent, render} from "@testing-library/react";
import Modal from "./Modal.jsx";
import ModalBody from "./ModalBody.jsx";
import ModalClose from "./ModalClose.jsx";
import ModalFooter from "./ModalFooter.jsx";
import ModalHeader from "./ModalHeader.jsx";
import ModalImage from "./ModalImage.jsx";
import ModalText from "./ModalText.jsx";
import ModalWrapper from "./ModalWrapper.jsx";
import modalClose from "./ModalClose.jsx";

const handleClick = jest.fn()
const handleChange = jest.fn()

describe('Modal components tests', () => {
    it('render modal', () => {
        const modal = render(<Modal>test</Modal>)
        expect(modal.getByText('test')).toBeInTheDocument()
    });

    it('nodal prop classnames', () => {
        const modal = render(<Modal className={'test-class'}>test</Modal>)
        expect(modal.getByText('test')).toHaveClass('test-class')
    });

    it('modal snapshot', () => {
        const modal = render(<Modal className={'test-class'}>test</Modal>)
        expect(modal.getByText('test')).toMatchSnapshot()
    });

    it('render modal body', () => {
        const modalBody = render(<ModalBody>test</ModalBody>)
        expect(modalBody.getByText('test')).toBeInTheDocument()
    });

    it('snapshot modal body', () => {
        const modalBody = render(<ModalBody>test</ModalBody>)
        expect(modalBody.getByText('test')).toMatchSnapshot()
    });

    it('render modal close', () => {
        const {container} = render(<ModalClose/>)
        const button = document.querySelector('button')
        expect(button).toBeInTheDocument()
    });

    it('test onClick in ModalClose', () => {
        const {container} = render(<ModalClose onClick={handleClick}/>)
        const button = document.querySelector('button')
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalled()
    });

    it('snapshot ModalClose', () => {
        const modalClose = render(<ModalClose/>)
        expect(modalClose).toMatchSnapshot()
    });

    it('remder ModalFooter', () => {
        const {container} = render(<ModalFooter/>)
        const footer = container.querySelector('footer')

        expect(footer).toBeInTheDocument()
    });

    it('test not have Input in Modal footer', () => {
        const {container} = render(<ModalFooter/>)
        const input = container.querySelector('input')

        expect(input).toBeNull()
    });

    it('test prop isCart in Modal footer', () => {
        const {container} = render(<ModalFooter isCart={true}/>)
        const input = container.querySelector('input')

        expect(input).toBeInTheDocument()
    });

    it('test input in Modal footer', () => {
        const {container} = render(<ModalFooter onChange={handleChange} isCart={true}/>)
        const input = container.querySelector('input')
        fireEvent.change(input, {
            target: {
                defaultValue: '1',
                value: '5'
            }
        })

        expect(handleChange).toHaveBeenCalled()
    });

    it('Test firstText & firstClick in ModalFooter', () => {
        const modalFooter = render(<ModalFooter firstText={'test'} firstClick={handleClick}/>)

        expect(modalFooter.getByText('test')).toBeInTheDocument()
    });

    it('Test firstText without firstClick in ModalFooter', () => {
        const modalFooter = render(<ModalFooter firstText={'test'}/>)

        expect(modalFooter.queryByText('test')).toBeNull()
    });

    it('Test firstClick without firstText in ModalFooter', () => {
        const modalFooter = render(<ModalFooter firstClick={handleClick}/>)

        expect(modalFooter.queryByText('test')).toBeNull()
    });

    it('Test not have buttons without props', () => {
        const {container} = render(<ModalFooter/>)
        const button = container.querySelector('button')

        expect(button).toBeNull()
    });

    it('Test secondText & secondClick in ModalFooter', () => {
        const modalFooter = render(<ModalFooter secondaryText={'test'} secondaryClick={handleClick}/>)

        expect(modalFooter.getByText('test')).toBeInTheDocument()
    });

    it('Test secondText without secondClick in ModalFooter', () => {
        const modalFooter = render(<ModalFooter secondaryText={'test'}/>)

        expect(modalFooter.queryByText('test')).toBeNull()
    });

    it('Test secondClick without secondText in ModalFooter', () => {
        const modalFooter = render(<ModalFooter secondaryClick={handleClick}/>)

        expect(modalFooter.queryByText('test')).toBeNull()
    });

    it('snapshot ModalFooter', () => {
        const modalFooter = render(<ModalFooter/>)
        expect(modalFooter).toMatchSnapshot()
    });

    it('render ModalHeader', () => {
        const {container} = render(<ModalHeader/>)
        const header = container.querySelector('header')

        expect(header).toBeInTheDocument()
    });

    it('Test h2 in ModalHeader', () => {
        const modalHeader = render(<ModalHeader children={'test'}/>)
        expect(modalHeader.getByText('test')).toBeInTheDocument()
    });

    it('snapshot ModalHeader', () => {
        const modalHeader = render(<ModalHeader children={'test'}/>)
        expect(modalHeader).toMatchSnapshot()
    });

    it('test render img in Modal image', () => {
        const modalImage = render(<ModalImage alt={'test'} imageURL={'#'}/>)
        expect(modalImage.getByAltText('test')).toBeInTheDocument()
    });

    it('test prop imageUrl in Modal image', () => {
        const modalImage = render(<ModalImage alt={'test'} imageURL={'#'}/>)
        expect(modalImage.getByAltText('test')).toHaveAttribute('src', '#')
    });

    it('snapshot Modal image', () => {
        const modalImage = render(<ModalImage alt={'test'} imageURL={'#'}/>)
        expect(modalImage).toMatchSnapshot()
    });

    it('test render ModalText', () => {
        const modalText = render(<ModalText children={'test'}/>)
        expect(modalText.getByText('test')).toBeInTheDocument()
    });

    it('snapshot ModalText', () => {
        const modalText = render(<ModalText children={'test'}/>)
        expect(modalText).toMatchSnapshot()
    });

    it('test not render ModalWrapper', () => {
        const modalWrapper = render(<ModalWrapper children={'test'} onClick={handleClick}/>)
        expect(modalWrapper.queryByText('test')).toBeNull()
    });

    it('test render ModalWrapper', () => {
        const modalWrapper = render(<ModalWrapper isOpen={true} children={'test'} onClick={handleClick}/>)
        expect(modalWrapper.getByText('test')).toBeInTheDocument()
    });

    it('test prop onClick in ModalWrapper', () => {
        const {container} = render(<ModalWrapper isOpen={true} children={'test'} onClick={handleClick}/>)
        const modalWrapper = container.querySelector('div')
        fireEvent.click(modalWrapper, {
            target: {
                classList: 'modal-wrapper'
            }
        })

        expect(handleClick).toHaveBeenCalled()
    });

    it('snapshot ModalWrapper', () => {
        const modalWrapper = render(<ModalWrapper isOpen={true} children={'test'} onClick={handleClick}/>)
        expect(modalWrapper).toMatchSnapshot()
    });
});