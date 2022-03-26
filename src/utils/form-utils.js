import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
    fullname: Yup.string().required("First and last name are required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phonenumber: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
    passwordconfirm: Yup.string().required("You must type in your password again").oneOf([Yup.ref('password'), null], "Passwords must match")
});

export const logInValidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required")
});

export const resetPasswordValidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid")
});

