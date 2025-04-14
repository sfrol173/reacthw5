import * as yup from 'yup'

export const validation = yup.object({
    firstName: yup
        .string()
        .required('Field First Name required')
        .min(3, 'Name too short')
        .max(20, 'Name must be less 20 characters')
        .matches(/^[a-zA-z]+[^0-9]*$/, 'Only letters'),

    lastName: yup
        .string()
        .required('Field Last Name required')
        .min(3, 'Last Name too short')
        .max(20, 'Last Name must be less 20 characters')
        .matches(/^[a-zA-z]+[^0-9]*$/, 'Only letters'),

    countryRegion: yup
        .string()
        .required('Field Country/Region required')
        .min(3, 'Too short')
        .max(20, 'Must be less 20 characters')
        .matches(/^[a-zA-z]+[^0-9]*$/, 'Only letters'),

    companyName: yup
        .string()
        .min(3, 'Company Name too short')
        .max(20, 'Company Name must be less 20 characters')
        .matches(/^[a-zA-z]+[^0-9]*$/, 'Only letters'),

    streetAddress: yup
        .string()
        .required('Field Street Address required')
        .min(3, 'Too short')
        .max(20, 'Must be less 20 characters')
        .matches(/^[a-zA-z]+[^0-9]*$/, 'Only letters'),

    aptSuiteUnit: yup
        .string()
        .min(1, 'Too short')
        .max(10, 'Must be less 20 characters')
        .matches(/^[a-zA-Z0-9]*$/, 'Only letters and number'),

    city: yup
        .string()
        .required('Field City required')
        .min(3, 'Too short')
        .max(20, 'Must be less 20 characters')
        .matches(/^[a-zA-z]+[^0-9]*$/, 'Only letters'),

    state: yup
        .string()
        .required('Field State required')
        .min(3, 'Too short')
        .max(20, 'Must be less 20 characters')
        .matches(/^[a-zA-z]+[^0-9]*$/, 'Only letters'),

    postalCode: yup
        .string()
        .required('Field Postal Code required')
        .min(3, 'Too short')
        .max(20, 'Must be less 20 characters')
        .matches(/^[a-zA-Z0-9]*$/, 'Only letters and numbers'),

    phone: yup
        .string()
        .required()
        .min(14, 'Must be 10 numbers')
})