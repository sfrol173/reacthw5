import React from "react";

import FooterNavigation from "./FooterNavigation.jsx";
import FooterSocials from "./FooterSocials.jsx";

import './footer.scss'


const Footer = () => {

    return (
        <footer className={'footer'}>
            <FooterNavigation/>
            <FooterSocials/>
            <p className={'footer-copyright'}>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
        </footer>
    )
}

export default Footer