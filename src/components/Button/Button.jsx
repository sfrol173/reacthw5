import React from "react";
import cn from "classnames";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import './Button.scss'

const Button = (props) => {
    const {onClick, type = 'button', classNames, href, children, to, isOutline, ...restProps} = props;

    let Element = href ? 'a' : 'button';

    if (to) {
        Element = Link;
    }

    return (
        <Element
            type = {href && type}
            onClick = {onClick}
            className = {cn('button', classNames, {'outline' : isOutline})}
            to = {to}
            href = {href}
            {...restProps}
        >
            {children}
        </Element>
    )
}

Button.protoTypes = {
    onClick : PropTypes.func,
    type : PropTypes.string,
    className : PropTypes.string,
    href : PropTypes.string,
    children : PropTypes.any,
    to : PropTypes.string,
    isOutline : PropTypes.bool,
    restProps : PropTypes.object
}

export default Button