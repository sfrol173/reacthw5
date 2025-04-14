import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import './ListItem.scss'

const ListItem = ({children, classNames, id}) => {

    return (
        <li className={cn('list-item', classNames)} id={id}>{children}</li>
    )
}

ListItem.propTypes = {
    children : PropTypes.any,
    classNames : PropTypes.string,
    id: PropTypes.string
}

export default ListItem