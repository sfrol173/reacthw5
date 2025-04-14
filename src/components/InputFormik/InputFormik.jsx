import React from 'react'
import PropTypes from "prop-types";
import './InputFormik.scss'
import cn from 'classnames'
import {PatternFormat} from "react-number-format";

const Input = (props) => {
    const {
        classNames,
        type = 'text',
        placeholder,
        name,
        label,
        isPhone = false,
        error,
        errorMessage,
        ...restProps
    } = props

    return (
        <label className={cn('form-item', classNames, {'has-validation': error})}>
            <p className="form-label">{label}</p>
            {!isPhone && (
                <input type={type} className="form-control" name={name} placeholder={placeholder} {...restProps}/>)}
            {isPhone && (<PatternFormat format="(###)### ## ##"
                                        allowEmptyFormatting mask=""
                                        className="form-control"
                                        value={"##########"}
                                        name={name}
                                        type={type}
                                        valueIsNumericString={true}
                                        {...restProps}/>)}
            {error && (
                <p className="error-message">{errorMessage}</p>
            )}
        </label>

    )
}

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    restProps: PropTypes.object
}
export default Input
