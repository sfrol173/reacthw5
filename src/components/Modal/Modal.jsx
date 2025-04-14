import React from "react";
import cn from "classnames";



const Modal = ({children, className}) => {

    return (
        <div className={cn('modal', className)}>{children}</div>
    )
}

export default Modal