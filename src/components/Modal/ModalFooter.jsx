import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";


const ModalFooter = (props) => {
    const {firstText, firstClick, secondaryText, secondaryClick, isCart, onChange = false} = props

    return (
        <footer className={'modal-footer'}>
            {isCart && (<Input type={'number'}
                               id={'product-amount'}
                               name={'amount'}
                               min={'1'}
                               max={'10'}
                               min-value={'1'}
                               onChange={onChange}
            />)}
            {firstText && firstClick && (<Button classNames={'modal-button first'} type={'button'} onClick={firstClick} children={firstText}/>)}
            {secondaryText && secondaryClick && (<Button classNames={'modal-button second'} type={'button'} onClick={secondaryClick} children={secondaryText}/>)}
        </footer>
    )
}

ModalFooter.propTypes = {
    firstText: PropTypes.string,
    firstClick: PropTypes.func,
    secondaryText: PropTypes.string,
    secondaryClick: PropTypes.func
}

export default ModalFooter