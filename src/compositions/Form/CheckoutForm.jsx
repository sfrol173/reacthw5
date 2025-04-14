import React from "react";
import {useFormik} from "formik";
import {useSelector, useDispatch} from "react-redux";
import {actionUserInfo, actionDeleteAfterBuying} from "../../store/slices/app.slice.js";
import {selectorUserInfo, selectorCartList} from "../../store/selectors.js";
import InputFormik from "../../components/InputFormik/InputFormik.jsx";
import Button from "../../components/Button/Button.jsx";
import {validation} from "./validation.js";


import './Form.scss'


const CheckoutForm = ({onSubmit}) => {

    const userInfo = useSelector(selectorUserInfo)
    const cartList = useSelector(selectorCartList)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            countryRegion: '',
            companyName: '',
            streetAddress: '',
            aptSuiteUnit: '',
            city: '',
            state: '',
            postalCode: '',
            phone: 'num',
            goods: cartList
        },
        onSubmit: (values, {resetForm}) => {

            dispatch(actionUserInfo(values))
            onSubmit()
            dispatch(actionDeleteAfterBuying())
            console.log('Інформація про придбані товари, а також інформація, яку користувач заповнив у формі', values)

        },
        validationSchema: validation
    })
    const rew = (event) => {
        formik.values.phone = event.target.value
    }
    return (
        <>
        <form onSubmit={formik.handleSubmit}  className={'form'}>
            <InputFormik type={'text'}
                         name={'firstName'}
                         label={'First Name*'}
                         placeholder={'First Name'}
                         error={formik.errors.firstName && formik.touched.firstName}
                         errorMessage={formik.errors.firstName}
                         {...formik.getFieldProps('firstName')}/>
            <InputFormik type={'text'}
                         name={'lastName'}
                         label={'Last Name*'}
                         placeholder={'Last Name'}
                         error={formik.errors.lastName && formik.touched.lastName}
                         errorMessage={formik.errors.lastName}
                         {...formik.getFieldProps('lastName')}/>
            <InputFormik type={'text'}
                         name={'countryRegion'}
                         label={'Country/Region*'}
                         placeholder={'Country/Region'}
                         error={formik.errors.countryRegion && formik.touched.countryRegion}
                         errorMessage={formik.errors.countryRegion}
                         {...formik.getFieldProps('countryRegion')}/>
            <InputFormik type={'text'}
                         name={'companyName'}
                         label={'Company Name'}
                         placeholder={'Company Name'}
                         error={formik.errors.companyName && formik.touched.companyName}
                         errorMessage={formik.errors.companyName}
                         {...formik.getFieldProps('companyName')}/>
            <InputFormik type={'text'}
                         name={'streetAddress'}
                         label={'Street Address*'}
                         placeholder={'Street Address'}
                         error={formik.errors.streetAddress && formik.touched.streetAddress}
                         errorMessage={formik.errors.streetAddress}
                         {...formik.getFieldProps('streetAddress')}/>
            <InputFormik type={'text'}
                         name={'aptSuiteUnit'}
                         label={'Apt, suite, unit'}
                         placeholder={'Apt, suite, uni'}
                         error={formik.errors.aptSuiteUnit && formik.touched.aptSuiteUnit}
                         errorMessage={formik.errors.aptSuiteUnit}
                         {...formik.getFieldProps('aptSuiteUnit')}/>
            <InputFormik type={'text'}
                         name={'city'}
                         label={'City*'}
                         placeholder={'City'}
                         classNames={'small'}
                         error={formik.errors.city && formik.touched.city}
                         errorMessage={formik.errors.city}
                         {...formik.getFieldProps('city')}/>
            <InputFormik type={'text'}
                         name={'state'}
                         label={'State*'}
                         placeholder={'State'}
                         classNames={'small'}
                         error={formik.errors.state && formik.touched.state}
                         errorMessage={formik.errors.state}
                         {...formik.getFieldProps('state')}/>
            <InputFormik type={'text'}
                         name={'postalCode'}
                         label={'PostalCode*'}
                         placeholder={'PostalCode'}
                         classNames={'small'}
                         error={formik.errors.postalCode && formik.touched.postalCode}
                         errorMessage={formik.errors.postalCode}
                         {...formik.getFieldProps('postalCode')}/>
            <InputFormik type={'text'}
                         name={'phone'}
                         label={'Phone*'}
                         placeholder={'Phone'}
                         isPhone={true}
                         error={formik.errors.phone && formik.touched.phone}
                         errorMessage={formik.errors.phone} id={'phone'}
                         onChange={(event)=> rew(event)}
            />
            <div className={'empty-div'}></div>
            <Button type={"submit"} children={'Continue to delivery'} classNames={'submit-cart'}/>
        </form>
        </>
    )


}

export default CheckoutForm