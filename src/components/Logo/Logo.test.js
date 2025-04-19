import React from "react";
import {render} from "@testing-library/react";
import Logo from "./Logo.jsx";

describe('Logo snapshot', () => {
    it('snapshot', () => {
        const logo = render(<Logo/>)
        expect(logo).toMatchSnapshot()
    });
});