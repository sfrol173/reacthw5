import React from "react";
import PropTypes from "prop-types";
import cs from "classnames";

import './Title.scss'
import cn from "classnames";

const Title = ({classNames, children}) => {

    return (
        <h2  className={cn(classNames)}>{children}</h2>
    )
}

Title.protoTypes = {
    classNames : PropTypes.string,
    children : PropTypes.any
}

export default Title