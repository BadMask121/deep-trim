import * as yup from 'yup';
import {app} from '../../constants';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: yup
    .string()
    .label('Password')
    .required('A password is required')
    .min(
      app.passwordMinLength,
      `Passwords must have at least ${app.passwordMinLength} characters`,
    )
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,}$/,
      'Passwords must contain at least 1 upper case letter, 1 number, 1 lower case letter and 1 special character (!@#$&*)',
    ),
});

const signupValidationSchema = yup.object().shape({
  firstname: yup
    .string()
    .label('First Name')
    .required('Please enter your given name'),
  lastname: yup
    .string()
    .label('Last Name')
    .required('Please enter your surname'),
  organisationname: yup
    .string()
    .label('Organisation Name')
    .required('Please enter your organisation name'),
  organisationlocation: yup
    .string()
    .label('Organisation Location')
    .required('Please enter your organisation location'),
});

const confirmSignupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: yup
    .string()
    .label('Password')
    .required('A password is required')
    .min(
      app.passwordMinLength,
      `Passwords must have at least ${app.passwordMinLength} characters`,
    )
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,}$/,
      'Passwords must contain at least 1 upper case letter, 1 number, 1 lower case letter and 1 special character (!@#$&*)',
    ),
  confirmpassword: yup
    .string()
    .label('Password')
    .required('A password is required')
    .min(
      app.passwordMinLength,
      `Passwords must have at least ${app.passwordMinLength} characters`,
    )
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,}$/,
      'Passwords must contain at least 1 upper case letter, 1 number, 1 lower case letter and 1 special character (!@#$&*)',
    ),
});

const createInvoiceValidationSchema = yup.object().shape({
  client: yup
    .string()
    .min(3)
    .label('Client')
    .required('Please enter client name'),
  // item: yup
  //   .object()
  //   .noUnknown(true)
  //   .label('Item')
  //   .required('Please select an Item'),
  reference: yup.string().label('Reference'),
  quantity: yup
    .number()
    .label('Quantity')
    .required('Please enter quantity amount'),
  description: yup.string().label('Description'),
});

export {
  loginValidationSchema,
  signupValidationSchema,
  confirmSignupValidationSchema,
  createInvoiceValidationSchema,
};
