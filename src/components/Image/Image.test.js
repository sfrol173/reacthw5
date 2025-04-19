import React from "react";
import {render,screen} from "@testing-library/react";
import Image from "./Image.jsx";


describe('Image test', () => {
    it('should', () => {
        const image = render(<Image alt={'test-image'} src={'test-url'} classNames={'test-test'}/>)

        expect(image.getByAltText('test-image')).toBeInTheDocument()
    });

    it('test props classNames', () => {
        const image = render(<Image alt={'test-image'} src={'test-url'} classNames={'test-test'}/>)

        expect(image.getByAltText('test-image')).toHaveClass('test-test')
    });

    it('test props src', () => {
        const image = render(<Image alt={'test-image'} src={'test-url'} classNames={'test-test'}/>)

        expect(image.getByAltText('test-image')).toHaveAttribute('src', 'test-url')
    });
})